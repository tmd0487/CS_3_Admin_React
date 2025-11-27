import React, { useState } from "react";
import styles from "./MemberList.module.css";
import { MOCK_MEMBERS } from "./mockData";
import MemberDetail from "./MemberDetail";

const ITEMS_PER_PAGE = 10;

const MemberList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);

  const totalPages = Math.ceil(MOCK_MEMBERS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = MOCK_MEMBERS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={styles.cardGrid}>
      {/* 헤더 */}
      <div className={styles.listHeader}>
        <div className={styles.listColNumber}>번호</div>
        <div className={styles.listColUsername}>아이디</div>
        <div className={styles.listColNickname}>닉네임</div>
        <div className={styles.listColDate}>작성일</div>
        <div className={styles.listColReport}>신고횟수</div>
      </div>

      {/* 데이터 행 */}
      {currentItems.map((member) => (
        <div
          key={member.id}
          className={styles.listRow}
          onClick={() => setSelectedMember(member)}
        >
          <div className={styles.listColNumber}>{member.id}</div>
          <div className={styles.listColUsername}>{member.username}</div>
          <div className={styles.listColNickname}>{member.nickname}</div>
          <div className={styles.listColDate}>{member.date}</div>
          <div className={styles.listColReport}>{member.reports}</div>
        </div>
      ))}

      {/* 페이지네이터 */}
      <div className={styles.pagination}>
        <button className={styles.pageControl} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>{"<<"}</button>
        <button className={styles.pageControl} onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>{"<"}</button>

        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button className={styles.pageControl} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>{">"}</button>
        <button className={styles.pageControl} onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>{">>"}</button>
      </div>

      {/* 모달 */}
      {selectedMember && (
        <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  );
};

export default MemberList;
