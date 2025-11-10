import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminSetupPage } from './pages/AdminSetupPage';
import { supabase } from './lib/supabase';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleQuoteSubmit = () => {
    navigate('/thank-you');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/admin/dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
      <Route path="/thank-you" element={<ThankYouPage onNavigateHome={handleBackToHome} />} />
      <Route path="/admin/setup" element={<AdminSetupPage />} />
      <Route
        path="/admin"
        element={
          isAuthenticated ?
            <AdminDashboardPage onLogout={handleLogout} /> :
            <AdminLoginPage onLoginSuccess={handleLoginSuccess} />
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ?
            <AdminDashboardPage onLogout={handleLogout} /> :
            <AdminLoginPage onLoginSuccess={handleLoginSuccess} />
        }
      />
    </Routes>
  );
}

export default App;
