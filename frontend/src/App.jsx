
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginGuru from "./pages/LoginGuru";
import DashboardGuru from "./pages/DashboardGuru";
import DashboardAdmin from "./pages/DashboardAdmin";

// Proteksi halaman berdasarkan role pengguna
function ProtectedRoute({ allowedRole, children }) {
  const role = sessionStorage.getItem("edushare_role");

  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function AppContent() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const handleLogin = ({ email, password }) => {
    if (email === "guru@edushare.com" && password === "guru123") {
      sessionStorage.setItem("edushare_role", "guru");
      setRefresh((prev) => prev + 1);
      navigate("/guru/dashboard");
      return;
    }

    if (email === "admin@edushare.com" && password === "admin123") {
      sessionStorage.setItem("edushare_role", "admin");
      setRefresh((prev) => prev + 1);
      navigate("/admin/dashboard");
      return;
    }

    alert("Email atau password salah!");
  };

  // Logout pengguna
  const handleLogout = () => {
    sessionStorage.removeItem("edushare_role");
    sessionStorage.removeItem("edushare_token");
    sessionStorage.removeItem("user");

    localStorage.removeItem("edushare_role");
    localStorage.removeItem("edushare_token");
    localStorage.removeItem("user");

    navigate("/", { replace: true });
  };

  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={<LandingPage onLogin={() => navigate("/login")} />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          <LoginGuru
            onLogin={handleLogin}
            onBack={() => navigate("/")}
          />
        }
      />

      {/* Dashboard Guru */}
      <Route
        path="/guru/*"
        element={
          <ProtectedRoute allowedRole="guru">
            <DashboardGuru
              key={`guru-${refresh}`}
              onLogout={handleLogout}
            />
          </ProtectedRoute>
        }
      />

      {/* Dashboard Admin */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardAdmin
              key={`admin-${refresh}`}
              onLogout={handleLogout}
            />
          </ProtectedRoute>
        }
      />

      {/* Halaman tidak ditemukan */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
