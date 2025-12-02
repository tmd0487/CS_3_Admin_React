// src/admin/report/BoardDetail.jsx
import React, { useEffect } from "react";
import styles from "./BoardList.module.css";
import { caxios } from "../../config/config";
import { EditorContent, useEditor } from "@tiptap/react";
import { extensions } from "./CustomHighlight";

const BoardDetail = ({ post, setSelectedPost, onBack, onDelete }) => {

  useEffect(() => {
    caxios.get("/report/boardDetail", { params: { board_seq: post.board_seq } })
      .then(resp => {
        setSelectedPost(prev => ({
          ...prev,
          report_types: resp.data.map(item => item.report_type)
        }));
      })
  }, []);

  const editor = useEditor({
    extensions,
    content: "",
    editable: false
  });

  useEffect(() => {//에디터 내용 복원(json 파싱)
    if (!editor || !post?.content) return;

    try {
      const parsed = JSON.parse(post.content);
      editor.commands.setContent(parsed);
    } catch (e) {
      console.error("에디터 복원 실패", e);
    }
  }, [editor, post]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.maincontainer}>
        <h2 style={{ marginBottom: "12px" }}>{post.title}</h2>
        <p style={{ marginBottom: "8px" }}><strong>작성자:</strong> {post.user_id}</p>
        <p><strong>작성일:</strong> {post.created_at}</p>
        <p>
          <strong>신고 종류:</strong>{" "}
          {post.report_types &&
            Object.entries(
              post.report_types.reduce((acc, type) => {
                acc[type] = (acc[type] || 0) + 1;
                return acc;
              }, {})
            ).map(([type, count]) => (
              <span key={type}>{`${type}(${count})`} </span>
            ))
          }
        </p>
        <hr style={{ margin: "12px 0" }} />
        <div>
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>

      <div className={styles.but}>
        <button className={styles.back} onClick={onBack}>뒤로가기</button>
        <button className={styles.del} onClick={() => onDelete(post.id)}>삭제</button>
      </div>
    </div>
  );
};

export default BoardDetail;
