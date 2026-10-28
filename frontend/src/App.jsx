
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginGuru from "./pages/LoginGuru";
import DashboardGuru from "./pages/DashboardGuru";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  const [halaman, setHalaman] = useState("landing");

  // Periksa sesi ketika halaman dibuka atau dipulihkan.
  useEffect(() => {
    const periksaSesi = () => {
      const role = sessionStorage.getItem("edushare_role");

      if (role === "guru") {
        setHalaman("dashboard-guru");
      } else if (role === "admin") {
        setHalaman("dashboard-admin");
      } else {
        setHalaman("landing");
      }
    };

    window.addEventListener("pageshow", periksaSesi);

    // Periksa juga saat aplikasi pertama kali dibuka.
    periksaSesi();

    return () => {
      window.removeEventListener("pageshow", periksaSesi);
    };
  }, []);

  const handleLogin = ({ email, password }) => {
    if (email === "guru@edushare.com" && password === "guru123") {
      sessionStorage.setItem("edushare_role", "guru");
      setHalaman("dashboard-guru");
      return;
    }

    if (email === "admin@edushare.com" && password === "admin123") {
      sessionStorage.setItem("edushare_role", "admin");
      setHalaman("dashboard-admin");
      return;
    }

    alert("Email atau password salah!");
  };

  const handleLogout = () => {
    // Hapus semua data sesi autentikasi EDUSHARE.
    sessionStorage.removeItem("edushare_role");
    sessionStorage.removeItem("edushare_token");
    sessionStorage.removeItem("user");

    // Hapus juga jika status login pernah disimpan di localStorage.
    localStorage.removeItem("edushare_role");
    localStorage.removeItem("edushare_token");
    localStorage.removeItem("user");

    // Kembali ke landing page dan ganti entri riwayat saat ini.
    setHalaman("landing");
    window.history.replaceState(null, "", "/");
  };

  // Lindungi dashboard guru.
  if (halaman === "dashboard-guru") {
    if (sessionStorage.getItem("edushare_role") !== "guru") {
      return <LandingPage onLogin={() => setHalaman("login")} />;
    }

    return <DashboardGuru onLogout={handleLogout} />;
  }

  // Lindungi dashboard admin.
  if (halaman === "dashboard-admin") {
    if (sessionStorage.getItem("edushare_role") !== "admin") {
      return <LandingPage onLogin={() => setHalaman("login")} />;
    }

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

  return <LandingPage onLogin={() => setHalaman("login")} />;
}

export default App;
