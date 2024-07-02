import React from "react";
import styles from "./styles.module.css"; 
import {Comment} from "../../mocks/comments";
import Comments from "components/ui/comments/comments";

function CommentPage( { commentId }: {commentId: number}) {
  return (
    <>
      <h2 className={styles.sectionTitle}>Комментарий </h2>
      <Comments commentId={commentId}/>
    </>
  );
}

export default CommentPage;
