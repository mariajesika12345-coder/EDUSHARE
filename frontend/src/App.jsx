
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginGuru from "./pages/LoginGuru";
import DashboardGuru from "./pages/DashboardGuru";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  const [halaman, setHalaman] = useState("landing");

  // Periksa sesi setiap kali halaman dipulihkan oleh browser.
  useEffect(() => {
    const periksaSesi = () => {
      const role = sessionStorage.getItem("edushare_role");

      if (role !== "guru" && role !== "admin") {
        setHalaman("landing");
      } else {
        setHalaman(
          role === "guru" ? "dashboard-guru" : "dashboard-admin"
        );
      }
    };

    window.addEventListener("pageshow", periksaSesi);

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
    // Hancurkan status sesi login di browser.
    sessionStorage.removeItem("edushare_role");

    // Bersihkan status autentikasi lain jika ada.
    sessionStorage.removeItem("edushare_token");
    sessionStorage.removeItem("user");

    // Jangan simpan dashboard sebagai halaman aktif.
    setHalaman("landing");
  };

  // Dashboard hanya ditampilkan jika sesi sesuai dengan perannya.
  if (halaman === "dashboard-guru") {
    if (sessionStorage.getItem("edushare_role") !== "guru") {
      return (
        <LandingPage onLogin={() => setHalaman("login")} />
      );
    }

    return <DashboardGuru onLogout={handleLogout} />;
  }

  if (halaman === "dashboard-admin") {
    if (sessionStorage.getItem("edushare_role") !== "admin") {
      return (
        <LandingPage onLogin={() => setHalaman("login")} />
      );
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
