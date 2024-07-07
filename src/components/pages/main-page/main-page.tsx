import React, { useState, ChangeEvent, useEffect, useId } from "react";
import NewsList from "../../blocks/news-list/news-list";
import styles from "./styles.module.css"; 

type Timer = {
  update: boolean,
  timeLeft: number,
}

function MainPage() {
  const [timer, setTimer] = useState<Timer>({timeLeft: 30, update: true});

  useEffect(()=>{
    const timeoutID = setTimeout(() => {
      if (timer.timeLeft === 0) {
        setTimer({
          timeLeft: 30,
          update: !timer.update,
        });
        return;
      }

      setTimer({
        ...timer,
        timeLeft: timer.timeLeft-1,
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [timer.timeLeft, timer.update]);

  const storyTypeSelectId = useId();

  const [selectedItem, setSelectedItem] = useState("newstories");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  const onClick = () => {
    setTimer({
      timeLeft: 30,
      update: !timer.update,
    });
  }

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>Новости</h2>
      <div className={styles.supportWrapper}>
        <label htmlFor={storyTypeSelectId}>
          Select story type:
          <select className={styles.selector} id={storyTypeSelectId} name='item-selected' value={selectedItem} onChange={handleChange}>
            <option value="newstories">New Stories</option>
            <option value="topstories">Top Stories</option>
            <option value="beststories">Best Stories</option>
          </select>
        </label>
        <div className={styles.timerWrapper}>
          <p className={styles.timer}>Update: {timer.timeLeft}</p>
          <button className={styles.updateButton} onClick={onClick}>Update now!</button>
        </div>
      </div>
      <NewsList dataType={selectedItem} update={timer.update}/>
    </section>
  );
}

export default MainPage;
