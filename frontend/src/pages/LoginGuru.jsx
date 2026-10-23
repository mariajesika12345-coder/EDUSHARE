
import { useState } from "react";

function LoginGuru({ onLogin, onBack, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    setError("");

    if (onLogin) {
      onLogin({
        email: email.trim(),
        password,
        remember,
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#EFF6FF] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid md:grid-cols-2">

        {/* PANEL KIRI */}
        <div
          className="relative flex min-h-[600px] flex-col justify-center overflow-hidden bg-cover bg-center p-8 text-white sm:p-10"
          style={{
  backgroundImage: `
    linear-gradient(
      180deg,
      rgba(0, 63, 180, 0.30) 0%,
      rgba(0, 52, 155, 0.48) 45%,
      rgba(0, 48, 160, 0.90) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0, 65, 190, 0.35),
      rgba(0, 65, 190, 0.10)
    ),
    url("/login-guru.png")
  `,
}}
        >
          {/* Konten panel kiri */}
          <div className="relative z-10 mt-auto">
            <h1 className="text-[38px] font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-[46px] lg:text-[52px]">
               EDUSHARE
              </h1>

            <h2 className="mt-2 text-xl font-bold leading-snug text-white drop-shadow-md sm:text-[26px] lg:text-[29px]">
            Edukasi, Dokumentasi, dan Sharing
             </h2>

            <p className="mt-6 max-w-[590px] text-base leading-8 text-white font-medium drop-shadow-sm sm:text-lg">
           Selamat datang di platform dokumentasi dan publikasi hasil
           pelatihan guru SMKN 1 Batam.
          </p>

            {/* Informasi tambahan */}
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="m2 10 10-6 10 6-10 6-10-6Z" />
                <path d="M6 12.5V17c3.5 3 8.5 3 12 0v-4.5" />
                <path d="M22 10v6" />
              </svg>

              <p className="text-sm font-medium leading-7 text-white drop-shadow-sm sm:text-base">
              Temukan materi pelatihan, dokumentasi kegiatan, dan hasil
              karya guru dalam satu platform.
               </p>
            </div>
          </div>

          {/* Dekorasi gelombang */}
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-56 w-[120%] rotate-[-7deg] rounded-[50%] border-t border-white/30 bg-blue-500/20" />
        </div>

        {/* PANEL LOGIN */}
        <div className="flex min-h-[600px] flex-col justify-center bg-white p-8 sm:p-10 md:p-12 lg:p-14">
          {/* Tombol kembali opsional */}
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mb-5 self-start text-sm font-medium text-[#3B82F6] transition hover:text-[#1D4ED8]"
            >
              ← Kembali
            </button>
          )}

          {/* Judul */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#172554]">
              Login Guru
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#64748B] sm:text-base">
              Silakan masuk untuk mengakses akun Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-semibold text-[#334155]"
              >
                Email
              </label>

              <div className="flex items-center rounded-xl border border-[#BFDBFE] bg-white transition focus-within:border-[#3B82F6] focus-within:ring-2 focus-within:ring-[#DBEAFE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-4 shrink-0 text-[#64748B]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email"
                  required
                  className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-4 text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-semibold text-[#334155]"
              >
                Password
              </label>

              <div className="flex items-center rounded-xl border border-[#BFDBFE] bg-white transition focus-within:border-[#3B82F6] focus-within:ring-2 focus-within:ring-[#DBEAFE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-4 shrink-0 text-[#64748B]"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <circle cx="12" cy="15" r="1" />
                </svg>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-4 text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                  className="px-4 text-[#64748B] transition hover:text-[#2563EB]"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.1-2.3 3.2" />
                      <path d="M6.2 6.2C3.9 7.7 2.6 9.8 2 12c.6 1.5 2.1 3.7 4.7 5.2A10.6 10.6 0 0 0 12 19c1.1 0 2.1-.2 3-.5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* INGAT SAYA */}
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#334155]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-5 w-5 rounded accent-[#3B82F6]"
              />
              Ingat saya
            </label>

            {/* ERROR */}
            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            {/* TOMBOL LOGIN */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#2878F8] py-4 font-semibold text-white shadow-sm transition duration-200 hover:bg-[#1D64DB] focus:outline-none focus:ring-2 focus:ring-[#93C5FD] focus:ring-offset-2"
            >
              Login
            </button>
          </form>

          {/* BUAT AKUN */}
          <p className="mt-8 text-center text-sm text-[#475569]">
            Belum punya akun?{" "}
            <button
              type="button"
              onClick={onRegister}
              className="font-semibold text-[#2563EB] transition hover:text-[#1D4ED8] hover:underline"
            >
              Buat akun
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginGuru;
