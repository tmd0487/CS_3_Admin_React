// src/admin/report/BoardDetail.jsx
import React from "react";
import styles from "./BoardList.module.css";

const BoardDetail = ({ post, onBack, onDelete }) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.maincontainer}>
        <h2 style={{ marginBottom: "12px" }}>{post.title}</h2>
        <p style={{ marginBottom: "8px" }}><strong>작성자:</strong> {post.author}</p>
        <p><strong>작성일:</strong> {post.date}</p>
        <hr style={{ margin: "12px 0" }}/>
        <p>여기에 게시글 내용을 넣으면 됩니다.</p>
      </div>

      <div className={styles.but}>
        <button className={styles.back} onClick={onBack}>뒤로가기</button>
        <button className={styles.del} onClick={() => onDelete(post.id)}>삭제</button>
      </div>
    </div>
  );
};

export default BoardDetail;
