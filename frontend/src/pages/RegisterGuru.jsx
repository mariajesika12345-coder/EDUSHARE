
import { useState } from "react";

function RegisterGuru({ onRegister, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();

  if (password !== passwordConfirmation) {
    setError("Konfirmasi password tidak sama.");
    return;
  }

  setError("");

  const result = await onRegister({
    name: name.trim(),
    email: email.trim(),
    password,
    password_confirmation: passwordConfirmation,
  });

  if (result) {
    setShowSuccess(true);
  }
}

  const inputClass =
    "w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1E293B] outline-none focus:border-[#94A3B8] focus:ring-1 focus:ring-[#CBD5E1]";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-4 sm:p-6">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div
          className="relative flex min-h-[600px] flex-col justify-center bg-cover bg-center p-8 text-white sm:p-10"
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                rgba(0, 63, 180, 0.30),
                rgba(0, 48, 160, 0.90)
              ),
              url("/login-guru.png")
            `,
          }}
        >
          <div className="relative z-10">
  <span className="mb-4 inline-block rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider text-white">
    PLATFORM DIGITAL GURU
  </span>

  <h1 className="!text-white text-4xl font-extrabold tracking-wide">
    EDUSHARE
  </h1>

  <div className="mt-3 h-1 w-16 rounded-full bg-orange-400" />

  <h2 className="!text-white mt-5 text-2xl font-bold leading-snug">
    Bergabung Bersama EDUSHARE
  </h2>

  <p className="!text-white mt-4 max-w-sm text-sm leading-7">
    Daftarkan akun Anda untuk mengakses materi pelatihan, dokumentasi kegiatan, dan hasil karya guru SMKN 1 Batam dalam satu platform digital.
  </p>
</div>
        </div>

        <div className="flex flex-col justify-center bg-white p-6 sm:p-8 md:p-9">
          <button
            type="button"
            onClick={onBack}
            className="mb-5 self-start text-sm font-medium text-[#2563EB] hover:underline"
          >
            ← Kembali ke Login
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
              Buat Akun
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Silakan lengkapi data untuk mendaftar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#334155]">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#334155]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#334155]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter"
                className={inputClass}
                minLength={8}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#334155]">
                Konfirmasi Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Ulangi password"
                className={inputClass}
                required
              />
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#475569]">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="h-4 w-4 accent-[#2563EB]"
              />
              Tampilkan password
            </label>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full min-h-[48px] rounded-lg bg-[#2878F8] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D64DB]"
            >
              Daftar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#475569]">
            Sudah punya akun?{" "}
            <button
              type="button"
              onClick={onBack}
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
            {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-12 w-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="mb-7 text-2xl font-bold text-gray-800">
              Pendaftaran Berhasil!
            </h2>

            <button
              type="button"
              onClick={onBack}
              className="w-full rounded-xl bg-[#2878F8] py-3 font-semibold text-white transition hover:bg-[#1E40AF]"
            >
              Masuk ke Akun
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterGuru;
