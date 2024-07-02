import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ScrollTop from "../ui/scroll-top/scroll-top";
import styles from "./styles.module.css";
import news from "../mocks/news";
import comments from "../mocks/comments"
import MainPage from "components/pages/main-page/main-page";
import CommentPage from "components/pages/comment-page/comment-page";
import {Comment} from "../mocks/comments";

function CommentById() {
  const { id } = useParams();
  return <CommentPage commentId={Number(id)} />;
}

function App() {
  return (
    <>
      <div className={styles.bodyWrapper}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="comment">
            <Route path=":id" element={<CommentById />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
