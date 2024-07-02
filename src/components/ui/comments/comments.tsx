import React, { useState, useEffect } from "react";
import {Comment} from "../../mocks/comments";
import CommentList from "../../blocks/comment-list/comment-list";
import styles from "./styles.module.css"; 

type commentProps = {
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

function Comments ( { commentId }: {commentId: number} ) {
    const [comment, setComment] = useState<commentProps>({id: 0});

    useEffect(() => {
        const getComment = async () => {
            try{
                const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`, {
                    method: "GET",
                });
                const jsonData = await data.json();
                return jsonData;
            } 
            catch (error){
                <h4>Извините, возникла ошибка при получении данных.</h4>;
            }
        };

        getComment().then((result) => setComment(result));
    }, []);

    return (!comment.deleted) ? (<>
        <section className={styles.commentSection}>
            <div className={styles.commentWrapper}>
                {(comment.title) ? <a className={styles.commentTitle} href={comment.url}>{comment.title}</a> : null}
                {(comment.by) ? <a className={styles.commentLink} href="#">{comment.by}</a> : <p className={styles.commentLink}>anonim</p>}
                {(comment.score) ? <p className={styles.commentScore}>score {comment.score}</p> : null}
                {(comment.time) ? (
                    (new Date(comment.time).getMinutes() >= 60) ? 
                        (<p className={styles.commentTime}>| {new Date(comment.time).getHours().toString()} hours ago</p>) :
                        (<p className={styles.commentTime}>| {new Date(comment.time).getMinutes().toString()} minutes ago</p>))
                : null}
            </div>
            {(comment.text) ? (<p className={styles.commentText} dangerouslySetInnerHTML={{__html: comment.text}}></p>) : null}
            {comment.kids ? (
                <div className={styles.innerComments}>
                    <CommentList comments = {comment.kids}/>
                </div>
            ) : null}
         </section>
    </>) : null;
}

export default Comments;