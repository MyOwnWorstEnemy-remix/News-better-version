import React, { useState, ChangeEvent, useEffect, useId  } from "react";
import NewsList from "../../blocks/news-list/news-list";
import styles from "./styles.module.css"; 

const options = [
  { value: 'newstories', label: 'New Stories' },
  { value: 'topstories', label: 'Top Stories' },
  { value: 'beststories', label: 'Best Stories' },
];

function MainPage() {
  const storyTypeSelectId = useId();

  const [selectedItem, setSelectedItem] = useState("newstories");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>Новости</h2>
      <div className={styles.selectorWrapper}>
        <label htmlFor={storyTypeSelectId}>
          Select story type:
        </label>
        <select className={styles.selector} id={storyTypeSelectId} name='item-selected' value={selectedItem} onChange={handleChange}>
          <option value="newstories">New Stories</option>
          <option value="topstories">Top Stories</option>
          <option value="beststories">Best Stories</option>
        </select>
      </div>
      <NewsList dataType={selectedItem}/>
    </section>
  );
}

export default MainPage;
