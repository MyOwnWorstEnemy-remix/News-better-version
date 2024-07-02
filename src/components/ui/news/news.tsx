import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {PieceOfNews} from "../../mocks/news";
import styles from "./styles.module.css"; 

type newsProps = {
    id: number,
    deleted?: boolean,
    type?: string,
    by?: string,
    time?: Date,
    text?: string,
    dead?: boolean,
    parent?: number,
    poll?: number,
    kids?: number[],
    url?: string,
    score?: number,
    title?: string,
    parts?: number[],
    descendants?: number,
  };

function News ( { pieceOfNewsToRender }: {pieceOfNewsToRender: number }) {
    const [story, setStory] = useState<newsProps>({id: 0});

    useEffect(() => {
        const getPieceOfNews = async () => {
            try{
                const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${pieceOfNewsToRender}.json?print=pretty`, {
                    method: "GET",
                });
                const jsonData = await data.json();
                return jsonData;
            } 
            catch (error){
                <h4>Извините, возникла ошибка при получении данных.</h4>;
            }
        };

        getPieceOfNews().then((result) => setStory(result));
    }, []);

    return (<>
        <h3 className={styles.newsTitle}>
            <a className={styles.newsLink} href={story.url}>{story.title}</a>
        </h3>
        <div className={styles.newsInfoWrapper}>
            <p className={styles.newsScore}>{story.score} points | by <a className={styles.newsLink} href="#">{story.by}</a></p>
            {(story.time) ? (
                (new Date(story.time).getMinutes() >= 60) ? 
                    (<p>| {new Date(story.time).getHours().toString()} hours ago</p>) :
                    (<p>| {new Date(story.time).getMinutes().toString()} minutes ago</p>))
                : null}
            {(story.kids) ? (<Link className={styles.newsLink} to={`/comment/${story.id}`}>| {story.descendants} comments</Link>) : null}
        </div>
        {(story.text) ? (<p className={styles.newsText} dangerouslySetInnerHTML={{__html: story.text}}></p>) : null}
    </>);
}

export default News;