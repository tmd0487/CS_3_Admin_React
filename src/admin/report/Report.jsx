import React, { useState } from "react";
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";
import CommentList from "./CommentList";
import CommentDetail from "./CommentDetail"; // 추가
import { MOCK_BOARD, MOCK_COMMENT } from "./mockData";
import styles from "./Report.module.css";

const Report = () => {
  const [viewType, setViewType] = useState("board"); // board | comment
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleBack = () => setSelectedPost(null);
  const handleCloseComment = () => setSelectedComment(null);
  const handleDeletePost = (id) => {
    alert(`게시글 ${id} 삭제`);
    handleBack();
  };
  const handleDeleteComment = (id) => {
    alert(`댓글 ${id} 삭제`);
    handleCloseComment();
  };

  return (
    <div className={styles.container}>
      {/* 상단 탭 */}
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <div className={styles.categoryList}>
            <button
              className={`${styles.board} ${viewType === "board" ? styles.activeTab : ""}`}
              onClick={() => { setViewType("board"); setSelectedPost(null); }}
            >
              게시판
            </button>
            <button
              className={`${styles.comment} ${viewType === "comment" ? styles.activeTab : ""}`}
              onClick={() => { setViewType("comment"); setSelectedComment(null); }}
            >
              댓글
            </button>
          </div>
        </div>
      </div>

      {/* 게시판 */}
      {viewType === "board" && (
        selectedPost ? (
          <BoardDetail 
            post={selectedPost} 
            onBack={handleBack} 
            onDelete={() => handleDeletePost(selectedPost.id)} 
          />
        ) : (
          <BoardList 
            data={MOCK_BOARD} 
            onSelectPost={setSelectedPost} 
          />
        )
      )}

      {/* 댓글 */}
      {viewType === "comment" && (
        <>
          <CommentList 
            data={MOCK_COMMENT} 
            onSelectComment={setSelectedComment} 
          />
          {selectedComment && (
            <CommentDetail 
              comment={selectedComment} 
              onClose={handleCloseComment} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default Report;
