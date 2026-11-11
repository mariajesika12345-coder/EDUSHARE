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
import RegisterGuru from "./pages/RegisterGuru";

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

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors?.email?.[0] ||
            data.message ||
            "Email atau password salah!",
        );
      }

      const user = data.user;

      if (user.role !== "guru" && user.role !== "admin") {
        throw new Error("Role pengguna tidak dikenali.");
      }

      sessionStorage.setItem("edushare_role", user.role);
      sessionStorage.setItem("edushare_token", data.token);
      sessionStorage.setItem("user", JSON.stringify(user));

      setRefresh((prev) => prev + 1);

      if (user.role === "guru") {
        navigate("/guru/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      alert(error.message || "Tidak dapat terhubung ke server Laravel.");
    }
  };
  // Register pengguna
  const handleRegister = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        const firstError = Object.values(data.errors || {})[0]?.[0];

        throw new Error(firstError || data.message || "Pendaftaran gagal.");
      }

      return true;
    } catch (error) {
      alert(error.message || "Tidak dapat terhubung ke server Laravel.");
    }
  };
  // Logout pengguna
  const handleLogout = async () => {
    const token = sessionStorage.getItem("edushare_token");

    try {
      if (token) {
        await fetch("http://127.0.0.1:8000/api/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error("Logout API gagal:", error);
    } finally {
      sessionStorage.removeItem("edushare_role");
      sessionStorage.removeItem("edushare_token");
      sessionStorage.removeItem("user");

      localStorage.removeItem("edushare_role");
      localStorage.removeItem("edushare_token");
      localStorage.removeItem("user");

      navigate("/", { replace: true });
    }
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
            onRegister={() => navigate("/register")}
          />
        }
      />
      {/* Register */}
      <Route
        path="/register"
        element={
          <RegisterGuru
            onRegister={handleRegister}
            onBack={() => navigate("/login")}
          />
        }
      />
      {/* Dashboard Guru */}
      <Route
        path="/guru/*"
        element={
          <ProtectedRoute allowedRole="guru">
            <DashboardGuru key={`guru-${refresh}`} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Dashboard Admin */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardAdmin key={`admin-${refresh}`} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Halaman tidak ditemukan */}
      <Route path="*" element={<Navigate to="/" replace />} />
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
