
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
    <div className="min-h-screen bg-[#F8FBFE] flex items-center justify-center p-6">

      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid md:grid-cols-2">

        {/* PANEL KIRI */}
        <div className="bg-[#6A89A7] p-10 text-white flex flex-col justify-center">

          <h1 className="text-3xl font-bold tracking-wide">
            EDUSHARE
          </h1>

          <p className="mt-3 text-lg font-semibold text-[#BDDDFC]">
            Edukasi, Dokumentasi, dan Sharing
          </p>

          <p className="mt-5 leading-relaxed text-white">
            Selamat datang di platform dokumentasi dan publikasi
            hasil pelatihan guru SMKN 1 Batam.
          </p>

          <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-5">
            <p className="text-sm leading-relaxed text-white/90">
              Temukan materi pelatihan, dokumentasi kegiatan,
              dan hasil karya guru dalam satu platform.
            </p>
          </div>

        </div>

        {/* PANEL LOGIN */}
        <div className="p-8 md:p-12">

          <button
            type="button"
            onClick={onBack}
            className="mb-6 text-sm font-medium text-[#6A89A7] transition hover:text-[#394959]"
          >
            
          </button>

          {/* JUDUL DI TENGAH */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#394959]">
              Login Guru
            </h2>

            <p className="mt-2 text-sm text-[#6A89A7]">
              Silakan masuk untuk mengakses akun Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* EMAIL ATAU NIP */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#394959]">
                Email
              </label>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email"
                className="w-full rounded-lg border border-[#BDDDFC] bg-white px-4 py-3 text-[#394959] outline-none transition placeholder:text-gray-400 focus:border-[#6A89A7] focus:ring-2 focus:ring-[#BDDDFC]"
              />
            </div>

            {/* PASSWORD DENGAN IKON MATA */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#394959]">
                Password
              </label>

              <div className="flex overflow-hidden rounded-lg border border-[#BDDDFC] focus-within:border-[#6A89A7] focus-within:ring-2 focus-within:ring-[#BDDDFC]">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="min-w-0 flex-1 bg-white px-4 py-3 text-[#394959] outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  className="px-4 text-[#6A89A7] transition hover:text-[#394959]"
                >
                  {showPassword ? (
                    /* IKON MATA TERTUTUP */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
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
                    /* IKON MATA TERBUKA */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
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
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#394959]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-[#6A89A7]"
              />
              Ingat saya
            </label>

            {/* PESAN ERROR */}
            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* TOMBOL LOGIN */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#6A89A7] py-3 font-semibold text-white transition duration-200 hover:bg-[#394959] focus:outline-none focus:ring-2 focus:ring-[#88BDF2] focus:ring-offset-2"
            >
              Login
            </button>

          </form>

          {/* BUAT AKUN */}
          <p className="mt-6 text-center text-sm text-[#394959]">
            Belum punya akun?{" "}
            <button
              type="button"
              onClick={onRegister}
              className="font-semibold text-[#6A89A7] hover:text-[#394959] hover:underline"
            >
              Buat akun
            </button>
          </p>

          <p className="mt-6 text-center text-xs text-gray-400">
            
          </p>

        </div>
      </div>
    </div>
  );
}

export default LoginGuru;
