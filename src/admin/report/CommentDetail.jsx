// src/admin/report/CommentDetail.jsx
import React from "react";
import styles from "./CommentDetail.module.css";

const CommentDetail = ({ comment, onClose, onDelete }) => {
  if (!comment) return null;

  // comment 객체에 reports 필드가 있다고 가정하고 0으로 대체합니다.
  const reportCount = comment.reports || 0; 
  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* 1. 작성자 및 메타 정보 */}
        <h3 className={styles.modalAuthor}>{comment.author}</h3>
        <div className={styles.modalMeta}>
          <span className={styles.modalDate}>{comment.date}</span>
          <span className={styles.modalReport}>{reportCount}</span>
        </div>
        
        {/* 2. 댓글 내용 */}
        <p className={styles.modalComment}>{comment.comment}</p>

        {/* 3. 버튼 영역 */}
        <div className={styles.buttons}>
          {/* 뒤로가기 버튼 (스크린샷에서는 '뒤로가기'로 표시) */}
          <button className={styles.btnBack} onClick={onClose}>뒤로가기</button>
          {/* 삭제 버튼 */}
          <button className={styles.btnDelete} onClick={() => onDelete ? onDelete(comment.id) : alert(`댓글 ${comment.id} 삭제`)}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;