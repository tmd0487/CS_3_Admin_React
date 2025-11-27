import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CommonHeader from "../common/CommonHeader";
import DashboardIndex from "../admin/dashboard/dashboardIndex";
import Report from "../admin/report/Report";
import Member from "../admin/member/MemberList";
import styles from "./MainIndex.module.css";

const MainIndex = () => {
  const location = useLocation();

  // yellow/white 배경 선택
  const yellowBackgroundPaths = ["/report"];
  const isYellowBackground = yellowBackgroundPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  const mainLayoutClassName = isYellowBackground
    ? styles.layoutMainYellow
    : styles.layoutMain;

  return (
    <div className={styles.container}>
      {/* 상단 헤더 */}
      <header className={styles.MemberHeader}>
        <CommonHeader />
      </header>

      {/* 메인 콘텐츠 */}
      <div className={mainLayoutClassName}>
        <Routes>
          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="/report/*" element={<Report />} />  {/* <-- /report/* 로 수정 */}
          <Route path="/member/*" element={<Member />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainIndex;
