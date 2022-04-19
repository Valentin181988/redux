import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
/* import { LoginPage } from './pages/LoginPage'; */
import { Layout } from './pages/Layout';
import { DashboardPage, LoginPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
