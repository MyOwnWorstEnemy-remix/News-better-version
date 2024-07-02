import React, { useState, useEffect, useRef } from "react";
import News from "../../ui/news/news";
import styles from "./styles.module.css"; 

type newsList = number[];

const limit = 15;

function NewsList({ dataType } : {dataType: string}) {
  const [allStories, setAllStories] = useState<newsList>([]);
  const [stories, setStories] = useState<newsList>([]);
  const [page, setPage] = useState(1);
  const [isInitialCall, setIsInitialCall] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const loadingRef = useRef(null);
  const controllerRef = useRef<AbortController>();

  const fetchData  = async () => {
    try{
      const controller = new AbortController();
      controllerRef.current = controller;
      const signal = controller.signal;
      const data = await fetch(`https://hacker-news.firebaseio.com/v0/${dataType}.json?print=pretty`, {signal});
      const newStories = await data.json();
      setAllStories(newStories);
      setHasMore(true);
    } 
    catch (error){
      <h4>Извините, возникла ошибка при получении данных.</h4>;
    }
  };

  useEffect(() => {
    setStories([]);
    setPage(1);
    fetchData();
    return () => {
        if (controllerRef.current) controllerRef.current.abort();
      };
  }, [dataType]);

  const addStory = () => {
    setIsInitialCall(false);
    if (stories.length < allStories.length) {
      const moreStories = allStories.slice((page - 1) * limit, page * limit);
      setStories(prevStories => [...prevStories, ...moreStories]);
      // setPage((page) => page + 1);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      addStory();
    }
  }, [allStories, page, hasMore]);

  useEffect(() => {
    if (!loadingRef.current) return;

    const loading = loadingRef.current;
    const loadingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInitialCall) {
          setPage((page) => page + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    loadingObserver.observe(loading);
    return () => {
      if (loading) loadingObserver.unobserve(loading);
    };
  }, [stories]);

  return (
    <>
      <ul className={styles.list}>
          {stories.map((story) => (
            <li className={styles.listItem} key={story}>
              <News pieceOfNewsToRender={story} />
            </li>
          ))}
      </ul>
      {hasMore && (
        <div ref={loadingRef}>
          <div className="loader">
            <div className="spin" />
          </div>
        </div>
      )}

      {!hasMore && <div className="record"> Record Fetched... </div>}
    </>
  )
}

export default NewsList;
