import React from "react";
import styles from "./styles.module.css"; 
import Comments from "../../ui/comments/comments";
import {Comment} from "../../mocks/comments";


function CommentList({ comments }: {comments: number[]}) {
  return comments ? (
      <ul className={styles.list}>
        {comments.map((comment) => (
          <li className={styles.listItem} key={comment}>
            <Comments commentId={comment} />
          </li>
        ))}
      </ul>
    ) : null;
}

export default CommentList;
