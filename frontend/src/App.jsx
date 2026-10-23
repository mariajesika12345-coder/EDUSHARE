
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginGuru from "./pages/LoginGuru";
import DashboardGuru from "./pages/DashboardGuru";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  const [halaman, setHalaman] = useState("landing");

  const handleLogin = ({ email, password }) => {
    // Login Guru
    if (
      email === "guru@edushare.com" &&
      password === "guru123"
    ) {
      setHalaman("dashboard-guru");
      return;
    }

    // Login Admin
    if (
      email === "admin@edushare.com" &&
      password === "admin123"
    ) {
      setHalaman("dashboard-admin");
      return;
    }

    alert("Email atau password salah!");
  };

  const handleLogout = () => {
    setHalaman("landing");
  };

  if (halaman === "dashboard-guru") {
    return <DashboardGuru onLogout={handleLogout} />;
  }

  if (halaman === "dashboard-admin") {
    return <DashboardAdmin onLogout={handleLogout} />;
  }

  if (halaman === "login") {
    return (
      <LoginGuru
        onLogin={handleLogin}
        onBack={() => setHalaman("landing")}
      />
    );
  }

  return (
    <LandingPage
      onLogin={() => setHalaman("login")}
    />
  );
}

export default App;
