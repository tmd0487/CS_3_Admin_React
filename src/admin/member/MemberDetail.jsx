// src/admin/member/MemberDetail.jsx
import React from "react";
import styles from "./MemberDetail.module.css";

const MemberDetail = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>

                {/* 🎯 콘텐츠 영역: 제목과 정보 리스트를 묶음 */}
                <div className={styles.modalContent}>
                    {/* 모달 제목 */}
                    <h2 className={styles.modalTitle}>회원 정보</h2>

                    {/* 정보 출력 영역: infoList는 이미 묶여 있음 */}
                    <div className={styles.infoList}>
                        {/* 아이디 */}
                        <p className={styles.infoKey}>아이디</p>
                        <p className={styles.infoValue}>{member.username}</p>

                        {/* 닉네임 */}
                        <p className={styles.infoKey}>닉네임</p>
                        <p className={styles.infoValue}>{member.nickname}</p>

                        {/* 이메일 */}
                        <p className={styles.infoKey}>이메일</p>
                        <p className={styles.infoValue}>{member.email || '살려주셈@naver.com'}</p>

                        {/* 생일 */}
                        <p className={styles.infoKey}>생일</p>
                        <p className={styles.infoValue}>{member.birthdate || '98.12.12'}</p>

                        {/* 연락처 */}
                        <p className={styles.infoKey}>연락처</p>
                        <p className={styles.infoValue}>{member.phone || '010-1234-1234'}</p>
                    </div>
                </div>

                {/* 버튼 영역: buttonContainer는 이미 묶여 있음 */}
                <div className={styles.buttonContainer}>
                    <button className={`${styles.actionButton} ${styles.cancelButton}`} onClick={onClose}>취소</button>
                    <button className={`${styles.actionButton} ${styles.completeButton}`}>완료</button>
                </div>
            </div>
        </div>
 );
};

export default MemberDetail;