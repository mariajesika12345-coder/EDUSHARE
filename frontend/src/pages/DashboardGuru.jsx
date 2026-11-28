import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api";
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  Upload,
  ClipboardCheck,
  Award,
  LogOut,
  Menu,
  X,
  Search,
  PlayCircle,
  Presentation,
  Download,
  CheckCircle2,
  MapPin,
  MessageSquareQuote,
  TrendingUp,
  Heart,
  Send,
  Sparkles,
} from "lucide-react";

const pelatihanData = [
  {
    id: 1,
    judul: "Pemanfaatan Generative AI untuk Pembelajaran",
    tanggal: "3 September 2026",
    waktu: "09.00–12.00 WIB",
    lokasi: "SMKN 1 Batam",
    kuota: 40,
    terisi: 32,
    status: "Pendaftaran dibuka",
  },
  {
    id: 2,
    judul: "Pembuatan Media Ajar Digital",
    tanggal: "27 Oktober 2026",
    waktu: "09.00–12.00 WIB",
    lokasi: "Lab Komputer 2, SMKN 1 Batam",
    kuota: 30,
    terisi: 18,
    status: "Pendaftaran dibuka",
  },
  {
    id: 3,
    judul: "Pengembangan Modul Pembelajaran Interaktif",
    tanggal: "3 November 2026",
    waktu: "10.00–13.00 WIB",
    lokasi: "Ruang Rapat Utama, SMKN 1 Batam",
    kuota: 50,
    terisi: 18,
    status: "Pendaftaran dibuka",
  },
];

const sertifikatData = [
  {
    id: 1,
    judul: "Sertifikat Pelatihan Pemanfaatan Generative AI",
    tanggal: "3 September 2026",
    tersedia: true,
  },
  {
    id: 2,
    judul: "Sertifikat Pembuatan Media Ajar Digital",
    tanggal: "27 Oktober 2026",
    tersedia: false,
  },
];

const materiData = [
  {
    id: 1,
    judul: "Announcement-PPT",
    namaFile: "Announcement-PPT.pptx",
    tipe: "PPT",
    pelatihan: "Materi presentasi",
    file: "/materi/Announcement-PPT.pptx",
  },
  {
    id: 2,
    judul: "Announcement Text Learning-Video",
    namaFile: "Announcement Text Learning-Video.mp4",
    tipe: "Video",
    pelatihan: "Video pembelajaran",
    file: "/materi/Announcement%20Text%20Learning-Video.mp4",
  },
  {
    id: 3,
    judul: "Kuis Announcement HTML",
    namaFile: "kuis_announcement-HTML.html",
    tipe: "Kuis",
    pelatihan: "Kuis interaktif",
    file: "/materi/kuis_announcement-HTML.html",
  },
];

const menu = [
  { key: "beranda", label: "Beranda", icon: LayoutDashboard },
  { key: "pelatihan", label: "Pelatihan & Pendaftaran", icon: CalendarDays },
  { key: "materi", label: "Materi Pelatihan", icon: BookOpen },
  { key: "karya", label: "Unggah Hasil Karya", icon: Upload },
  { key: "publikasi", label: "Karya Peserta", icon: Heart },
  { key: "sertifikat", label: "Sertifikat", icon: Award },
  { key: "evaluasi", label: "Evaluasi Kegiatan", icon: ClipboardCheck },
  { key: "testimoni", label: "Testimoni Peserta", icon: MessageSquareQuote },
  { key: "skill", label: "Pengembangan Skill", icon: TrendingUp },
];
// URL SETIAP HALAMAN GURU
const routeGuru = {
  beranda: "/guru/dashboard",
  pelatihan: "/guru/pelatihan",
  materi: "/guru/materi",
  karya: "/guru/unggah-karya",
  publikasi: "/guru/karya-peserta",
  sertifikat: "/guru/sertifikat",
  evaluasi: "/guru/evaluasi",
  testimoni: "/guru/testimoni",
  skill: "/guru/pengembangan-skill",
};
const tipeIcon = {
  PPT: Presentation,
  Video: PlayCircle,
  Kuis: ClipboardCheck,
};

const inputClass =
  "w-full rounded-lg border border-storm-200 bg-white px-3 py-2.5 text-sm text-storm-800 placeholder:text-storm-300 focus:border-storm-400 focus:outline-none focus:ring-2 focus:ring-storm-100";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-storm-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-storm-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-storm-300 disabled:cursor-not-allowed disabled:opacity-50";

const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-storm-200 bg-white px-4 py-2.5 text-sm font-semibold text-storm-700 transition hover:bg-storm-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-storm-300 disabled:cursor-not-allowed disabled:opacity-50";

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-storm-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ title, desc }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold tracking-tight text-storm-800">
        {title}
      </h2>
      {desc && <p className="mt-1 text-sm leading-6 text-storm-500">{desc}</p>}
    </div>
  );
}

function EmptyState({ pesan = "Data akan ditampilkan setelah tersedia." }) {
  return (
    <div className="rounded-xl border border-storm-100 bg-white px-5 py-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-storm-50">
        <BookOpen size={26} className="text-storm-400" />
      </div>
      <p className="mt-4 text-sm font-semibold text-storm-700">
        Belum Ada Data
      </p>
      <p className="mt-1 text-sm text-storm-500">{pesan}</p>
    </div>
  );
}

function Badge({ children, tone = "default" }) {
  const tones = {
    default: "bg-storm-100 text-storm-700",
    success: "bg-emerald-50 text-emerald-700",
    warn: "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone] || tones.default}`}
    >
      {children}
    </span>
  );
}

// BERANDA
function Beranda({ nama, terdaftar, setView, jumlahKarya }) {
  const stats = [
    {
      label: "Pelatihan diikuti",
      value: terdaftar.length,
      icon: CalendarDays,
    },
    {
      label: "Materi tersedia",
      value: materiData.length,
      icon: BookOpen,
    },
    {
      label: "Sertifikat tersedia",
      value: sertifikatData.length,
      icon: Award,
    },
    {
      label: "Karya peserta",
      value: jumlahKarya,
      icon: Heart,
    },
  ];

  const aksesCepat = [
    { key: "pelatihan", label: "Daftar pelatihan", icon: CalendarDays },
    { key: "materi", label: "Buka materi", icon: BookOpen },
    { key: "karya", label: "Unggah hasil karya", icon: Upload },
    { key: "evaluasi", label: "Isi evaluasi", icon: ClipboardCheck },
    { key: "sertifikat", label: "Lihat sertifikat", icon: Award },
  ];

  return (
    <>
      <section className="mb-6 rounded-2xl bg-storm-500 p-6 text-white shadow-sm sm:p-7">
        <p className="text-sm !text-white/90">Selamat datang kembali</p>
        <h1 className="mt-1 text-2xl font-bold !text-white sm:text-3xl">
          {nama}
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-6 !text-white">
          Temukan materi pelatihan, dokumentasi kegiatan, dan hasil karya guru
          dalam satu platform EDUSHARE.
        </p>
        <button
          onClick={() => setView("pelatihan")}
          className="mt-5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-storm-700 transition hover:bg-storm-50"
        >
          Lihat pelatihan
        </button>
      </section>

      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-storm-100 text-storm-600">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-storm-800">{value}</p>
              <p className="text-sm text-storm-500">{label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        <section className="xl:col-span-2">
          <SectionTitle
            title="Pelatihan terbaru"
            desc="Informasi kegiatan pelatihan yang tersedia."
          />
          {pelatihanData.length === 0 ? (
            <EmptyState pesan="Belum ada informasi pelatihan yang tersedia." />
          ) : (
            <div className="space-y-3">
              {pelatihanData.slice(0, 2).map((p) => (
                <Card key={p.id} className="space-y-2">
                  <h3 className="font-semibold leading-6 text-storm-800">
                    {p.judul}
                  </h3>
                  <p className="flex items-start gap-2 text-sm text-storm-500">
                    <CalendarDays size={15} className="mt-0.5 shrink-0" />
                    <span>
                      {p.tanggal} · {p.waktu}
                    </span>
                  </p>
                  <p className="flex items-start gap-2 text-sm text-storm-500">
                    <MapPin size={15} className="mt-0.5 shrink-0" />
                    <span>{p.lokasi}</span>
                  </p>
                </Card>
              ))}
              <button
                onClick={() => setView("pelatihan")}
                className="text-sm font-semibold text-storm-600 hover:text-storm-800"
              >
                Lihat semua pelatihan →
              </button>
            </div>
          )}
        </section>

        <section>
          <SectionTitle
            title="Akses cepat"
            desc="Pilih fitur yang ingin kamu gunakan."
          />
          <Card className="space-y-1">
            {aksesCepat.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-storm-700 transition hover:bg-storm-50"
              >
                <Icon size={18} className="shrink-0 text-storm-500" />
                {label}
              </button>
            ))}
          </Card>
        </section>
      </div>
    </>
  );
}

// PENDAFTARAN PELATIHAN
function Pelatihan() {
  const [daftarPelatihan, setDaftarPelatihan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [terdaftarLokal, setTerdaftarLokal] = useState([]);
  const [pelatihanDipilih, setPelatihanDipilih] = useState(null);
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorWhatsapp, setNomorWhatsapp] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    const ambilPelatihan = async () => {
      try {
        setLoading(true);
        setError("");

        const token = sessionStorage.getItem("edushare_token");

        const response = await fetch(`${API_URL}/pelatihan`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const hasil = await response.json();

        if (!response.ok) {
          throw new Error(hasil.message || "Gagal mengambil data pelatihan.");
        }

        const data = (hasil.data || []).map((item) => ({
          id: item.id,
          judul: item.nama_pelatihan,
          tanggal: item.tanggal_mulai
            ? new Date(`${item.tanggal_mulai}T00:00:00`).toLocaleDateString(
                "id-ID",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )
            : "Belum ditentukan",
          batasPendaftaran: item.tanggal_tutup_pendaftaran
            ? new Date(
                `${item.tanggal_tutup_pendaftaran}T00:00:00`,
              ).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Belum ditentukan",
          waktu: "",
          lokasi: item.lokasi || "Lokasi belum ditentukan",
          status:
            item.status === "Dibuka"
              ? "Pendaftaran dibuka"
              : item.status || "Belum tersedia",
        }));

        setDaftarPelatihan(data);
      } catch (err) {
        setError(err.message || "Tidak dapat terhubung ke server.");
      } finally {
        setLoading(false);
      }
    };

    ambilPelatihan();
  }, []);

  const tutupForm = () => {
    setPelatihanDipilih(null);
    setNamaLengkap("");
    setNomorWhatsapp("");
    setPesan("");
  };

  const kirimPendaftaran = async (e) => {
    e.preventDefault();

    if (!pelatihanDipilih) return;

    if (terdaftarLokal.includes(pelatihanDipilih.id)) {
      setPesan("Anda sudah terdaftar pada pelatihan ini.");
      return;
    }

    const token = sessionStorage.getItem("edushare_token");

    if (!token) {
      setPesan("Silakan login kembali.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/pendaftaran-pelatihan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pelatihan_id: pelatihanDipilih.id,
          nama_lengkap: namaLengkap,
          nomor_whatsapp: nomorWhatsapp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors?.nama_lengkap?.[0] ||
            data.errors?.nomor_whatsapp?.[0] ||
            data.errors?.pelatihan_id?.[0] ||
            data.message ||
            "Pendaftaran gagal.",
        );
      }

      setTerdaftarLokal((prev) => [...prev, pelatihanDipilih.id]);
      setPesan("Pendaftaran berhasil!");
    } catch (err) {
      setPesan(err.message || "Tidak dapat terhubung ke server.");
    }
  };

  return (
    <>
      <SectionTitle
        title="Pelatihan & Pendaftaran"
        desc="Lihat informasi pelatihan dan daftarkan diri Anda."
      />

      {loading ? (
        <EmptyState pesan="Sedang mengambil data pelatihan..." />
      ) : error ? (
        <EmptyState pesan={error} />
      ) : daftarPelatihan.length === 0 ? (
        <EmptyState pesan="Belum ada pelatihan yang tersedia." />
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[601px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {daftarPelatihan.map((p) => {
            const selesai = p.status === "Selesai";
            const sudahDaftar = terdaftarLokal.includes(p.id);

            return (
              <Card key={p.id} className="flex flex-col">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <Badge tone={selesai ? "warn" : "success"}>{p.status}</Badge>
                  <CalendarDays size={20} className="text-storm-500" />
                </div>

                <h3 className="font-semibold leading-6 text-storm-800">
                  {p.judul}
                </h3>

                <p className="mt-3 flex items-start gap-2 text-sm text-storm-500">
                  <CalendarDays size={16} className="mt-0.5 shrink-0" />
                  {p.tanggal}
                </p>
                <p className="mt-2 flex items-start gap-2 text-sm text-amber-600">
                  <CalendarDays size={16} className="mt-0.5 shrink-0" />
                  <span>Batas pendaftaran: {p.batasPendaftaran}</span>
                </p>
                <p className="mt-2 flex items-start gap-2 text-sm text-storm-500">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {p.lokasi}
                </p>

                <button
                  type="button"
                  disabled={selesai || sudahDaftar}
                  onClick={() => {
                    setPelatihanDipilih(p);
                    setPesan("");
                  }}
                  className={`${btnPrimary} mt-5 w-full`}
                >
                  {selesai
                    ? "Pelatihan selesai"
                    : sudahDaftar
                      ? "Sudah terdaftar"
                      : "Daftar Pelatihan"}
                </button>
              </Card>
            );
          })}
        </div>
      )}

      {pelatihanDipilih && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-storm-800">
                  Form Pendaftaran
                </h3>
                <p className="mt-1 text-sm text-storm-500">
                  {pelatihanDipilih.judul}
                </p>
              </div>
              <button
                type="button"
                onClick={tutupForm}
                className="rounded-lg p-2 text-storm-500 hover:bg-storm-100"
                aria-label="Tutup form"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={kirimPendaftaran} className="space-y-4">
              {/* Nama Lengkap Beserta Gelar Akademik */}
              <div>
                <label className="mb-1 block text-sm font-medium text-storm-700">
                  Nama Lengkap Beserta Gelar Akademik
                </label>
                <input
                  required
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  className={inputClass}
                  placeholder="Contoh: Maria Jessica Gu Bhadi, S.Kom."
                />
              </div>

              {/* Nomor WhatsApp */}
              <div>
                <label className="mb-1 block text-sm font-medium text-storm-700">
                  Nomor WhatsApp
                </label>
                <input
                  required
                  type="tel"
                  value={nomorWhatsapp}
                  onChange={(e) => setNomorWhatsapp(e.target.value)}
                  className={inputClass}
                  placeholder="Contoh: 081234567890"
                />
              </div>

              {pesan && (
                <p className="rounded-lg bg-storm-50 p-3 text-sm text-storm-700">
                  {pesan}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={tutupForm}
                  className={`${btnOutline} flex-1`}
                >
                  Batal
                </button>

                <button type="submit" className={`${btnPrimary} flex-1`}>
                  <Send size={16} />
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// MATERI PELATIHAN — DATA ASLI TETAP DIPERTAHANKAN

function Materi() {
  const [tab, setTab] = useState("Semua");
  const [q, setQ] = useState("");
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const tabs = ["Semua", "Slide", "Modul", "Video"];

  useEffect(() => {
    const ambilMateri = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/materi`);
        const hasil = await response.json();

        if (!response.ok) {
          throw new Error(hasil.message || "Gagal mengambil materi.");
        }

        const dataMateri = (hasil.data || []).map((item) => ({
          id: item.id,
          judul: item.judul,
          namaFile: item.nama_file,
          tipe: item.tipe,
          pelatihan: item.kategori || "Materi pembelajaran",
          file: item.file_path,
        }));

        setMateri(dataMateri);
      } catch (err) {
        setError(err.message || "Tidak dapat terhubung ke server.");
      } finally {
        setLoading(false);
      }
    };

    ambilMateri();
  }, []);

  const hasil = materi.filter(
    (m) =>
      (tab === "Semua" ||
        (tab === "Slide" && m.tipe === "PPT") ||
        (tab === "Modul" && m.tipe === "Modul") ||
        m.tipe === tab) &&
      `${m.judul} ${m.pelatihan}`.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <SectionTitle
        title="Materi Pelatihan"
        desc="Akses slide, modul, dan video pembelajaran."
      />

      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-storm-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              aria-pressed={tab === t}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tab === t
                  ? "bg-storm-600 text-white"
                  : "bg-storm-50 text-storm-600 hover:bg-storm-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-storm-400"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari materi"
            aria-label="Cari materi"
            className={`${inputClass} pl-9`}
          />
        </div>
      </div>

      {loading ? (
        <EmptyState pesan="Sedang mengambil data materi..." />
      ) : error ? (
        <EmptyState pesan={error} />
      ) : hasil.length === 0 ? (
        <EmptyState pesan="Belum ada materi yang tersedia." />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {hasil.map((m) => {
            const Icon = tipeIcon[m.tipe] || BookOpen;

            return (
              <Card key={m.id} className="flex min-w-0 items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-storm-100 text-storm-600">
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-storm-800">
                    {m.judul}
                  </h3>
                  <p className="mt-1 truncate text-sm text-storm-500">
                    {m.pelatihan}
                  </p>
                  <div className="mt-2">
                    <Badge>{m.tipe}</Badge>
                  </div>
                </div>

                {m.tipe === "Video" ? (
                  <a
                    href={m.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnOutline}
                    aria-label="Tonton video"
                    title="Tonton video"
                  >
                    <PlayCircle size={16} />
                  </a>
                ) : (
                  <a
                    href={m.file}
                    download={m.tipe === "PPT" ? m.namaFile : undefined}
                    target={m.tipe === "Kuis" ? "_blank" : undefined}
                    rel={m.tipe === "Kuis" ? "noopener noreferrer" : undefined}
                    className={btnOutline}
                    aria-label={
                      m.tipe === "Kuis" ? "Buka kuis" : "Unduh materi"
                    }
                    title={m.tipe === "Kuis" ? "Buka kuis" : "Unduh materi"}
                  >
                    {m.tipe === "Kuis" ? (
                      <BookOpen size={16} />
                    ) : (
                      <Download size={16} />
                    )}
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

// UNGGAH HASIL KARYA
function HasilKarya({ setDaftar }) {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);

  const kirim = (e) => {
    e.preventDefault();
    if (!judul.trim() || !file) return;

    setDaftar((prev) => [
      {
        id: Date.now(),
        judul: judul.trim(),
        pembuat: "Guru",
        deskripsi: deskripsi.trim(),
        tanggal: "Hari ini",
        status: "Menunggu verifikasi",
        fileNama: file.name,
        likes: 0,
      },
      ...prev,
    ]);

    setJudul("");
    setDeskripsi("");
    setFile(null);
    e.target.reset();
  };

  return (
    <>
      <SectionTitle
        title="Unggah Hasil Karya"
        desc="Bagikan karya pembelajaran agar dapat didokumentasikan dan dipublikasikan."
      />

      <Card className="max-w-3xl">
        <form onSubmit={kirim} className="space-y-5">
          <div>
            <label
              htmlFor="judul-karya"
              className="mb-1.5 block text-sm font-medium text-storm-800"
            >
              Judul karya
            </label>
            <input
              id="judul-karya"
              required
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Masukkan judul karya"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="deskripsi-karya"
              className="mb-1.5 block text-sm font-medium text-storm-800"
            >
              Deskripsi
            </label>
            <textarea
              id="deskripsi-karya"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={4}
              placeholder="Ceritakan singkat tentang karya Anda"
              className={`${inputClass} resize-y`}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-storm-800">
              File karya
            </label>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-storm-200 bg-storm-50 px-4 py-8 text-center transition hover:border-storm-400 hover:bg-white">
              <Upload size={25} className="text-storm-500" />
              <span className="break-all text-sm font-medium text-storm-700">
                {file ? file.name : "Klik untuk memilih file"}
              </span>
              <span className="text-xs text-storm-500">
                PDF, DOC, DOCX, PPT, PPTX, MP4
              </span>
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4"
                className="sr-only"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={!judul.trim() || !file}
            className={btnPrimary}
          >
            <Upload size={16} />
            Unggah karya
          </button>

          <p className="text-xs leading-5 text-storm-500">
            Data saat ini hanya tersimpan sementara di tampilan dashboard.
          </p>
        </form>
      </Card>
    </>
  );
}

// KARYA PESERTA
function PublikasiKarya({ daftar }) {
  const [disukai, setDisukai] = useState([]);

  return (
    <>
      <SectionTitle
        title="Karya Peserta"
        desc="Lihat karya yang dibagikan dan berikan apresiasi dengan tombol suka."
      />

      {daftar.length === 0 ? (
        <EmptyState pesan="Belum ada karya peserta yang dipublikasikan." />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {daftar.map((item) => {
            const sudahLike = disukai.includes(item.id);

            return (
              <Card key={item.id}>
                <div className="mb-4 h-48 overflow-hidden rounded-xl bg-storm-50">
                  {item.fileNama === "kuis-bahasa-inggris.html" ? (
                    <img
                      src="/Kuis-guru.jpg"
                      alt={item.judul}
                      className="h-full w-full object-cover"
                    />
                  ) : item.judul === "Modul Pembelajaran Digital" ? (
                    <img
                      src="/Kuis-siswa.jpg"
                      alt={item.judul}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <BookOpen size={42} className="text-storm-400" />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-storm-500">
                    {item.pembuat || "Peserta Pelatihan"}
                  </p>
                  <Badge
                    tone={item.status === "Dipublikasikan" ? "success" : "warn"}
                  >
                    {item.status || "Dipublikasikan"}
                  </Badge>
                </div>
                <h3 className="mt-2 font-semibold text-storm-800">
                  {item.judul}
                </h3>
                {item.deskripsi && (
                  <p className="mt-2 text-sm leading-6 text-storm-500">
                    {item.deskripsi}
                  </p>
                )}
                {item.fileNama && (
                  <p className="mt-2 break-all text-xs text-storm-500">
                    File: {item.fileNama}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-storm-100 pt-4">
                  <span className="text-sm text-storm-500">
                    {(item.likes || 0) + (sudahLike ? 1 : 0)} suka
                  </span>
                  <button
                    onClick={() =>
                      setDisukai((prev) =>
                        sudahLike
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id],
                      )
                    }
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      sudahLike
                        ? "bg-rose-50 text-rose-600"
                        : "bg-storm-50 text-storm-600 hover:bg-storm-100"
                    }`}
                  >
                    <Heart
                      size={17}
                      className={sudahLike ? "fill-current" : ""}
                    />
                    {sudahLike ? "Disukai" : "Like"}
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

// SERTIFIKAT
function Sertifikat() {
  return (
    <>
      <SectionTitle
        title="Sertifikat"
        desc="Lihat sertifikat hasil pelatihan yang tersedia."
      />
      {sertifikatData.length === 0 ? (
        <EmptyState pesan="Sertifikat akan ditampilkan setelah tersedia." />
      ) : (
        <div className="space-y-3">
          {sertifikatData.map((s) => (
            <Card
              key={s.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold leading-6 text-storm-800">
                  {s.judul}
                </h3>
                <p className="mt-1 text-sm text-storm-500">{s.tanggal}</p>
                <div className="mt-3">
                  <Badge tone={s.tersedia ? "success" : "warn"}>
                    {s.tersedia ? "Tersedia" : "Belum tersedia"}
                  </Badge>
                </div>
              </div>
              <button
                type="button"
                disabled={!s.tersedia}
                className={`${btnOutline} w-full sm:w-auto`}
              >
                <Download size={16} />
                Unduh sertifikat
              </button>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}


function Evaluasi() {
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [penilaian, setPenilaian] = useState({});
  const [materiMenarik, setMateriMenarik] = useState("");
  const [komentar, setKomentar] = useState("");
  const [pelatihanSelanjutnya, setPelatihanSelanjutnya] = useState("");

  const [daftarPelatihan, setDaftarPelatihan] = useState([]);
  const [pelatihanId, setPelatihanId] = useState("");
  const [loading, setLoading] = useState(true);
  const [mengirim, setMengirim] = useState(false);
  const [pesan, setPesan] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  const pertanyaan = [
    "Saya belajar hal baru setelah mengikuti pelatihan ini.",
    "Pengetahuan dan keterampilan saya bertambah setelah mengikuti pelatihan ini.",
    "Pengalaman yang diperoleh dari pelatihan dapat diimplementasikan dalam pengembangan bahan ajar di mata pelajaran yang saya ampu.",
    "Materi pelatihan relevan dan mendukung pekerjaan saya sebagai guru di SMK.",
    "Secara umum pelatihan dilaksanakan dengan baik.",
    "Secara umum, pemateri menggunakan waktu dengan baik selama pelatihan berlangsung.",
    "Pemateri memiliki pengetahuan yang baik terkait subjek pelatihan.",
    "Pemateri mengorganisasi sesi pelatihan dengan baik.",
    "Pemateri mempersiapkan materi dengan baik.",
    "Pemateri menyampaikan materi dengan baik dan mudah dipahami.",
    "Pemateri dan tim responsif terhadap pertanyaan peserta.",
    "Pemateri mampu menghadirkan lingkungan pembelajaran/pelatihan dengan baik.",
    "Fasilitas pelatihan dipersiapkan dengan baik.",
  ];

  // AMBIL DATA PELATIHAN DARI DATABASE
  useEffect(() => {
    const ambilData = async () => {
      try {
        const token = sessionStorage.getItem("edushare_token");

        const response = await fetch(`${API_URL}/pelatihan`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const hasil = await response.json();

        if (!response.ok) {
          throw new Error(hasil.message || "Gagal mengambil data pelatihan.");
        }

        setDaftarPelatihan(hasil.data || []);

        const user = JSON.parse(sessionStorage.getItem("user") || "{}");
        setNama(user.name || "");
      } catch (err) {
        setPesan(err.message || "Gagal mengambil data pelatihan.");
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, []);

  // KIRIM EVALUASI KE DATABASE
  const kirimEvaluasi = async (e) => {
    e.preventDefault();
    setPesan("");

    const token = sessionStorage.getItem("edushare_token");

    if (!token) {
      setPesan("Sesi login berakhir. Silakan login kembali.");
      return;
    }

    if (!pelatihanId) {
      setPesan("Silakan pilih pelatihan terlebih dahulu.");
      return;
    }

    if (Object.keys(penilaian).length !== 13) {
      setPesan("Mohon isi seluruh 13 pertanyaan penilaian.");
      return;
    }

    try {
      setMengirim(true);

      const jawabanPenilaian = Object.fromEntries(
        pertanyaan.map((_, index) => [
          `penilaian_${index + 1}`,
          Number(penilaian[index + 1]),
        ]),
      );

      const response = await fetch(`${API_URL}/evaluasi-pelatihan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pelatihan_id: Number(pelatihanId),
          nama_lengkap: nama,
          usia: Number(usia),
          ...jawabanPenilaian,
          materi_menarik: materiMenarik,
          komentar: komentar,
          pelatihan_selanjutnya: pelatihanSelanjutnya,
        }),
      });

      const hasil = await response.json();

      if (!response.ok) {
        const errorValidasi = hasil.errors
          ? Object.values(hasil.errors).flat()[0]
          : null;

        throw new Error(
          errorValidasi || hasil.message || "Evaluasi gagal dikirim.",
        );
      }

      setTerkirim(true);
    } catch (err) {
      setPesan(err.message || "Tidak dapat terhubung ke server.");
    } finally {
      setMengirim(false);
    }
  };

  // PESAN BERHASIL
  if (terkirim) {
    return (
      <Card className="mx-auto w-full max-w-xl py-10 text-center">
        <CheckCircle2 size={44} className="mx-auto text-emerald-500" />
        <h3 className="mt-3 text-lg font-bold text-storm-800">
          Evaluasi berhasil dikirim!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-storm-500">
          Terima kasih telah memberikan penilaian dan masukan untuk kegiatan
          pelatihan.
        </p>
      </Card>
    );
  }

  return (
    <>
      <SectionTitle
        title="Evaluasi Kegiatan"
        desc="Berikan penilaian dan masukan terhadap pelaksanaan kegiatan pelatihan."
      />

      <Card className="w-full max-w-3xl">
        <div className="mb-6 border-b border-storm-100 pb-5">
          <h3 className="text-xl font-bold text-storm-800">
            
          </h3>

          <p className="mt-3 text-sm leading-6 text-storm-500">
            Kami ingin mengetahui pengalaman Bapak/Ibu selama mengikuti
            kegiatan pelatihan melalui beberapa pertanyaan berikut. Penilaian
            dan masukan Anda akan menjadi bahan evaluasi untuk meningkatkan
            kualitas pelatihan berikutnya.
          </p>

          <div className="mt-4 rounded-lg bg-storm-50 p-4 text-sm text-storm-700">
            <p className="font-semibold">Petunjuk Skala Penilaian:</p>
            <p>1 = Tidak Setuju</p>
            <p>2 = Kurang Setuju</p>
            <p>3 = Cukup</p>
            <p>4 = Setuju</p>
            <p>5 = Sangat Setuju</p>
          </div>
        </div>

        <form onSubmit={kirimEvaluasi} className="space-y-7">
          {/* PILIH PELATIHAN */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-storm-700">
              Pilih Pelatihan <span className="text-red-500">*</span>
            </label>

            <select
              required
              value={pelatihanId}
              onChange={(e) => setPelatihanId(e.target.value)}
              className={inputClass}
              disabled={loading || daftarPelatihan.length === 0}
            >
              <option value="">
                {loading ? "Mengambil data pelatihan..." : "Pilih pelatihan"}
              </option>

              {daftarPelatihan.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nama_pelatihan}
                </option>
              ))}
            </select>

            {!loading && daftarPelatihan.length === 0 && (
              <p className="mt-1 text-sm text-amber-600">
                Belum ada data pelatihan yang tersedia.
              </p>
            )}
          </div>

          {/* IDENTITAS PESERTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-storm-800">
              Identitas Peserta
            </h4>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-storm-700">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className={inputClass}
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-storm-700">
                Usia <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                min="18"
                max="100"
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
                className={inputClass}
                placeholder="Masukkan usia"
              />
            </div>
          </div>

          <div className="border-t border-storm-100" />

          {/* PENILAIAN SKALA 1-5 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-storm-800">
                Penilaian Kegiatan
              </h4>
              <p className="mt-1 text-sm text-storm-500">
                Pilih satu angka yang sesuai dengan pendapat Bapak/Ibu.
              </p>
            </div>

            {pertanyaan.map((item, index) => (
              <fieldset key={index} className="border-b border-storm-100 pb-5">
                <legend className="mb-3 text-sm font-medium leading-6 text-storm-800">
                  {index + 1}. {item}{" "}
                  <span className="text-red-500">*</span>
                </legend>

                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5].map((angka) => (
                    <label
                      key={angka}
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold transition ${
                        penilaian[index + 1] === angka
                          ? "border-storm-500 bg-storm-500 text-white"
                          : "border-storm-200 bg-white text-storm-700 hover:border-storm-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`pertanyaan-${index + 1}`}
                        value={angka}
                        required
                        checked={penilaian[index + 1] === angka}
                        onChange={() =>
                          setPenilaian((prev) => ({
                            ...prev,
                            [index + 1]: angka,
                          }))
                        }
                        className="sr-only"
                      />
                      {angka}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="border-t border-storm-100" />

          {/* PERTANYAAN ISIAN */}
          <div className="space-y-5">
            <h4 className="font-semibold text-storm-800">
              Umpan Balik dan Saran
            </h4>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-storm-700">
                14. Bagian materi pelatihan yang paling menarik (disukai)
                menurut Bapak/Ibu <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={materiMenarik}
                onChange={(e) => setMateriMenarik(e.target.value)}
                className={`${inputClass} resize-y`}
                placeholder="Tuliskan materi yang paling menarik menurut Anda"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-storm-700">
                15. Silakan tuliskan umpan balik atau komentar lain terkait
                pelaksanaan pelatihan ini
                <span className="text-red-500"> *</span>
              </label>
              <textarea
                required
                rows={4}
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
                className={`${inputClass} resize-y`}
                placeholder="Tuliskan umpan balik atau komentar Anda"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-storm-700">
                16. Tuliskan pelatihan selanjutnya yang Anda butuhkan untuk
                pengembangan kompetensi Anda sebagai guru
                <span className="text-red-500"> *</span>
              </label>
              <textarea
                required
                rows={4}
                value={pelatihanSelanjutnya}
                onChange={(e) => setPelatihanSelanjutnya(e.target.value)}
                className={`${inputClass} resize-y`}
                placeholder="Tuliskan kebutuhan pelatihan selanjutnya"
              />
            </div>
          </div>

          {pesan && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {pesan}
            </div>
          )}

          <button
            type="submit"
            disabled={mengirim || loading || daftarPelatihan.length === 0}
            className={`${btnPrimary} w-full sm:w-auto`}
          >
            <Send size={16} />
            {mengirim ? "Mengirim..." : "Kirim Evaluasi"}
          </button>
        </form>
      </Card>
    </>
  );
}

// TESTIMONI PESERTA
function Testimoni() {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  const [daftar, setDaftar] = useState([
    {
      id: 201,
      nama: "Siti Rahmawati",
      isi: "Materi pelatihan mudah dipahami dan bisa diterapkan saat membuat media pembelajaran.",
    },
    {
      id: 202,
      nama: "Andi Saputra",
      isi: "Kegiatan ini menambah ide baru untuk membuat pembelajaran lebih menarik.",
    },
  ]);

  const kirim = (e) => {
    e.preventDefault();
    if (!nama.trim() || !isi.trim()) return;

    setDaftar((prev) => [
      { id: Date.now(), nama: nama.trim(), isi: isi.trim() },
      ...prev,
    ]);
    setNama("");
    setIsi("");
  };

  return (
    <>
      <SectionTitle
        title="Testimoni Peserta"
        desc="Bagikan pengalaman dan kesan setelah mengikuti pelatihan."
      />

      <Card className="mb-6 max-w-2xl">
        <form onSubmit={kirim} className="space-y-4">
          <div>
            <label
              htmlFor="nama-testimoni"
              className="mb-1 block text-sm font-medium text-storm-800"
            >
              Nama peserta
            </label>
            <input
              id="nama-testimoni"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className={inputClass}
              placeholder="Masukkan nama"
            />
          </div>
          <div>
            <label
              htmlFor="isi-testimoni"
              className="mb-1 block text-sm font-medium text-storm-800"
            >
              Testimoni
            </label>
            <textarea
              id="isi-testimoni"
              required
              rows={4}
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              className={inputClass}
              placeholder="Ceritakan pengalaman Anda"
            />
          </div>
          <button className={btnPrimary} type="submit">
            <Send size={16} />
            Kirim testimoni
          </button>
        </form>
      </Card>

      {daftar.length === 0 ? (
        <EmptyState pesan="Belum ada testimoni peserta." />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {daftar.map((item) => (
            <Card key={item.id}>
              <MessageSquareQuote size={24} className="text-storm-500" />
              <p className="mt-3 text-sm leading-6 text-storm-600">
                “{item.isi}”
              </p>
              <p className="mt-4 text-sm font-semibold text-storm-800">
                {item.nama}
              </p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

// PENGEMBANGAN SKILL
const skillData = [
  {
    id: 1,
    kategori: "Media Pembelajaran",
    judul: "Membuat Kuis Interaktif",
    deskripsi:
      "Mempelajari cara menyusun kuis sederhana untuk membantu siswa memahami materi.",
  },
  {
    id: 2,
    kategori: "Teknologi Digital",
    judul: "Menyusun Modul Digital",
    deskripsi:
      "Mengembangkan modul pembelajaran yang rapi, mudah dibaca, dan dapat dibagikan.",
  },
  {
    id: 3,
    kategori: "Generative AI",
    judul: "Membuat Konten Pembelajaran",
    deskripsi:
      "Mengenal pemanfaatan alat digital untuk membantu menyiapkan ide dan konten pembelajaran.",
  },
];

function PengembanganSkill() {
  return (
    <>
      <SectionTitle
        title="Pengembangan Skill"
        desc="Jelajahi topik untuk mendukung pengembangan keterampilan guru."
      />
      {skillData.length === 0 ? (
        <EmptyState pesan="Informasi pengembangan skill akan ditampilkan setelah tersedia." />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillData.map((item) => (
            <Card key={item.id}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-storm-100 text-storm-600">
                <Sparkles size={23} />
              </div>
              <p className="mt-4 text-xs font-medium text-storm-500">
                {item.kategori}
              </p>
              <h3 className="mt-1 font-semibold text-storm-800">
                {item.judul}
              </h3>
              <p className="mt-2 text-sm leading-6 text-storm-500">
                {item.deskripsi}
              </p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

// DASHBOARD GURU
export default function DashboardGuru({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Menentukan halaman berdasarkan URL
  const view =
    Object.keys(routeGuru).find(
      (key) => routeGuru[key] === location.pathname,
    ) || "beranda";

  // Mengubah URL ketika menu diklik
  const setView = (key) => {
    navigate(routeGuru[key] || routeGuru.beranda);
  };

  // Mengarahkan URL yang tidak dikenal ke halaman beranda
  useEffect(() => {
    if (!Object.values(routeGuru).includes(location.pathname)) {
      navigate(routeGuru.beranda, { replace: true });
    }
  }, [location.pathname, navigate]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terdaftar] = useState([1, 2]);
  const [showLogout, setShowLogout] = useState(false);

  const [daftarKarya, setDaftarKarya] = useState([
    {
      id: 101,
      judul: "Kuis Interaktif Materi Bahasa Inggris",
      pembuat: "Siti Rahmawati",
      deskripsi:
        "Kuis singkat untuk menguji pemahaman siswa tentang announcement text.",
      tanggal: "10 September 2026",
      status: "Dipublikasikan",
      fileNama: "kuis-bahasa-inggris.html",
      likes: 8,
    },
    {
      id: 102,
      judul: "Modul Pembelajaran Digital",
      pembuat: "Andi Saputra",
      deskripsi: "Modul digital sebagai bahan belajar mandiri bagi siswa.",
      tanggal: "12 September 2026",
      status: "Dipublikasikan",
      fileNama: "modul-digital.pdf",
      likes: 5,
    },
  ]);

  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const nama = user.name || "Guru";

  const halaman = {
    beranda: (
      <Beranda
        nama={nama}
        terdaftar={terdaftar}
        setView={setView}
        jumlahKarya={daftarKarya.length}
      />
    ),
    pelatihan: <Pelatihan />,
    materi: <Materi />,
    karya: <HasilKarya setDaftar={setDaftarKarya} />,
    publikasi: <PublikasiKarya daftar={daftarKarya} />,
    sertifikat: <Sertifikat />,
    evaluasi: <Evaluasi />,
    testimoni: <Testimoni />,
    skill: <PengembanganSkill />,
  };

  const judulHalaman =
    menu.find((item) => item.key === view)?.label || "Beranda";

  return (
    <div className="min-h-screen bg-storm-50 text-storm-800">
      {sidebarOpen && (
        <button
          aria-label="Tutup menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-[1px] lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-storm-100 bg-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-[80px] shrink-0 items-center justify-between border-b border-storm-100 px-6">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-storm-800">
              EDUSHARE
            </h1>
            <p className="mt-0.5 text-xs text-storm-500">Portal Guru</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-storm-600 transition hover:bg-storm-50 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-storm-400">
            Menu utama
          </p>
          <nav className="space-y-1.5" aria-label="Menu utama">
            {menu.map((item) => {
              const Icon = item.icon;
              const aktif = view === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setView(item.key);
                    setSidebarOpen(false);
                  }}
                  aria-current={aktif ? "page" : undefined}
                  className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-300 ${
                    aktif
                      ? "bg-storm-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-storm-50 hover:text-slate-800"
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="shrink-0 border-t border-storm-100 p-4">
          <button
            onClick={() => setShowLogout(true)}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-storm-600 transition hover:bg-storm-50 hover:text-storm-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-300"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[270px]">
        <header className="sticky top-0 z-30 flex h-[80px] items-center justify-between border-b border-storm-100 bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-storm-600 transition hover:bg-storm-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-300 lg:hidden"
              aria-label="Buka menu"
            >
              <Menu size={22} />
            </button>
            <div className="min-w-0">
              <p className="text-sm text-storm-500">Halaman Guru</p>
              <h2 className="truncate font-semibold text-storm-800">
                {judulHalaman}
              </h2>
            </div>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-storm-100 font-bold text-storm-700">
              {nama.charAt(0).toUpperCase()}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-storm-800">{nama}</p>
              <p className="text-xs text-storm-500">Guru</p>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1600px] p-5 sm:p-7 lg:p-9">
          {halaman[view]}

          <footer className="mt-10 border-t border-storm-100 py-5 text-center text-xs leading-5 text-storm-500">
            © 2026 EDUSHARE — Dokumentasi dan Publikasi Hasil Pelatihan Guru
            SMKN 1 Batam
          </footer>
        </main>
      </div>

      {/* Popup Konfirmasi Logout */}
      {showLogout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="judul-konfirmasi-logout"
          >
            <h2
              id="judul-konfirmasi-logout"
              className="mb-3 text-lg font-bold text-slate-800"
            >
              Konfirmasi Logout
            </h2>

            <p className="mb-6 text-sm leading-6 text-slate-500">
              Apakah Anda yakin ingin keluar dari akun EDUSHARE?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 min-h-[48px] rounded-lg border border-storm-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-storm-50"
              >
                Batal
              </button>

              <button
                onClick={() => {
                  setShowLogout(false);
                  onLogout?.();
                }}
                className="flex-1 min-h-[48px] rounded-lg bg-storm-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-storm-700"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
