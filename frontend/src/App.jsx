
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginGuru from "./pages/LoginGuru";

function App() {
  const [halaman, setHalaman] = useState("beranda");

  if (halaman === "login") {
    return (
      <LoginGuru
        onBack={() => setHalaman("beranda")}
        onLogin={({ email }) => {
          alert(`Form login berhasil diuji untuk: ${email}`);
        }}
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