import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './admin/login/login';
import useAuthStore from './store/useAuthStore';
import DashboardIndex from './admin/dashboard/dashboardIndex';

function App() {
  const {isLogin, login} = useAuthStore(state => state);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    if (token) {
      login(token, id);
    }
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/*' element={<Login /> } /> */}
          <Route path='/*' element={!isLogin ? <Login /> : <DashboardIndex />} /> {/* 로그인안했으면 로그인페이지 / 했으면 데쉬보드 기본값*/}
          {/* <Route path="/management/*" element={<ManagementIndex />} /> 
          <Route path="/declaration/*" element={<DeclarationIndex />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
