import React from "react";
import { Link, useLocation } from "react-router-dom"; // ★ useLocation 추가
import { LogOut } from "lucide-react";
import styles from "./CommonHeader.module.css";
import log from "./img/log.svg";

const CommonHeader = () => {
  const location = useLocation(); // ★ 현재 주소 가져오기

  return (
    <div className={styles.topbar}>
      <div className={styles.headerContentWrapper}>

        {/* 좌측 메뉴 */}
        <div className={styles.leftSection}>
          <img src={log} className={styles.logoIcon} alt="로고 이미지" />

          <div className={styles.menuItems}>

            <div className={`${styles.menuItemBox} ${location.pathname === "/dashboard" ? styles.menuActive : ""}`}>
              <Link to="/dashboard" className={styles.menuItem}>대시보드</Link>
            </div>

            <div className={`${styles.menuItemBox} ${location.pathname === "/report" ? styles.menuActive : ""}`}>
              <Link to="/report" className={styles.menuItem}>신고관리</Link>
            </div>

            <div className={`${styles.menuItemBox} ${location.pathname === "/member" ? styles.menuActive : ""}`}>
              <Link to="/member" className={styles.menuItem}>멤버관리</Link>
            </div>

          </div>
        </div>

        {/* 우측 로그아웃 */}
        <div className={styles.logoutBox}>
          <span className={styles.menuItem}>로그아웃</span>
          <LogOut className={styles.logoutIcon} size={24} />
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
