
import { useState } from "react";
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
  FileText,
  PlayCircle,
  Presentation,
  Download,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  Images,
  Newspaper,
  MessageSquareQuote,
  TrendingUp,
  Heart,
  Send,
  Sparkles,
} from "lucide-react";

const pelatihanData = [
  {
    id: 1,
    judul: "Pelatihan Kurikulum Merdeka untuk Guru Produktif",
    tanggal: "20 Oktober 2026",
    waktu: "08.00 - 15.00 WIB",
    lokasi: "Aula SMKN 1 Batam",
    kuota: 40,
    terisi: 32,
  },
  {
    id: 2,
    judul: "Workshop Pembuatan Media Ajar Interaktif",
    tanggal: "27 Oktober 2026",
    waktu: "09.00 - 14.00 WIB",
    lokasi: "Lab Komputer 2",
    kuota: 30,
    terisi: 30,
  },
  {
    id: 3,
    judul: "Asesmen Berbasis Proyek (Project Based Learning)",
    tanggal: "3 November 2026",
    waktu: "08.00 - 12.00 WIB",
    lokasi: "Ruang Rapat Utama",
    kuota: 50,
    terisi: 18,
  },
];

const materiData = [
  {
    id: 1,
    judul: "Slide Kurikulum Merdeka",
    tipe: "Slide",
    pelatihan: "Kurikulum Merdeka",
    ukuran: "4,2 MB",
  },
  {
    id: 2,
    judul: "Modul Asesmen Formatif",
    tipe: "Modul",
    pelatihan: "Asesmen Berbasis Proyek",
    ukuran: "1,8 MB",
  },
  {
    id: 3,
    judul: "Rekaman Workshop Media Ajar",
    tipe: "Video",
    pelatihan: "Media Ajar Interaktif",
    ukuran: "212 MB",
  },
  {
    id: 4,
    judul: "Slide Strategi PjBL",
    tipe: "Slide",
    pelatihan: "Asesmen Berbasis Proyek",
    ukuran: "3,1 MB",
  },
  {
    id: 5,
    judul: "Modul Penyusunan Modul Ajar",
    tipe: "Modul",
    pelatihan: "Kurikulum Merdeka",
    ukuran: "2,6 MB",
  },
];

const sertifikatData = [
  {
    id: 1,
    judul: "Pelatihan Kurikulum Merdeka 2025",
    tanggal: "12 Agustus 2025",
    tersedia: true,
  },
  {
    id: 2,
    judul: "Workshop Literasi Digital",
    tanggal: "5 Maret 2026",
    tersedia: true,
  },
  {
    id: 3,
    judul: "Pelatihan Asesmen Berbasis Proyek",
    tanggal: "3 November 2026",
    tersedia: false,
  },
];

const menu = [
  { key: "beranda", label: "Beranda", icon: LayoutDashboard },
  { key: "pelatihan", label: "Pelatihan & Pendaftaran", icon: CalendarDays },
  { key: "materi", label: "Materi Pelatihan", icon: BookOpen },
  { key: "karya", label: "Unggah Hasil Karya", icon: Upload },
  { key: "publikasi", label: "Karya Peserta", icon: Heart },
  { key: "sertifikat", label: "Sertifikat", icon: Award },
  { key: "galeri", label: "Galeri Kegiatan", icon: Images },
  { key: "evaluasi", label: "Evaluasi Kegiatan", icon: ClipboardCheck },
  { key: "berita", label: "Berita", icon: Newspaper },
  { key: "testimoni", label: "Testimoni Peserta", icon: MessageSquareQuote },
  { key: "skill", label: "Pengembangan Skill", icon: TrendingUp },
];

const tipeIcon = {
  Slide: Presentation,
  Modul: FileText,
  Video: PlayCircle,
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
      {desc && (
        <p className="mt-1 text-sm leading-6 text-storm-500">{desc}</p>
      )}
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
      value: sertifikatData.filter((s) => s.tersedia).length,
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
        <p className="text-sm text-storm-100">Selamat datang kembali,</p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{nama}</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-storm-50">
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
          <div className="space-y-3">
            {pelatihanData.slice(0, 2).map((p) => (
              <Card key={p.id} className="space-y-2">
                <h3 className="font-semibold leading-6 text-storm-800">
                  {p.judul}
                </h3>
                <p className="flex items-start gap-2 text-sm text-storm-500">
                  <CalendarDays size={15} className="mt-0.5 shrink-0" />
                  <span>{p.tanggal} · {p.waktu}</span>
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
function Pelatihan({ terdaftar, toggleDaftar }) {
  return (
    <>
      <SectionTitle
        title="Pelatihan dan Pendaftaran"
        desc="Lihat informasi pelatihan dan daftarkan diri sebagai peserta."
      />

      <div className="space-y-4">
        {pelatihanData.map((p) => {
          const penuh = p.terisi >= p.kuota;
          const sudah = terdaftar.includes(p.id);

          return (
            <Card
              key={p.id}
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold leading-6 text-storm-800">
                    {p.judul}
                  </h3>
                  {sudah && <Badge tone="success">Terdaftar</Badge>}
                  {penuh && !sudah && <Badge tone="warn">Kuota penuh</Badge>}
                </div>
                <p className="flex flex-wrap items-center gap-2 text-sm text-storm-500">
                  <CalendarDays size={14} />
                  {p.tanggal}
                  <Clock size={14} className="ml-1" />
                  {p.waktu}
                </p>
                <p className="flex flex-wrap items-center gap-2 text-sm text-storm-500">
                  <MapPin size={14} />
                  {p.lokasi} · Terisi {p.terisi}/{p.kuota}
                </p>
              </div>
              <button
                onClick={() => toggleDaftar(p.id)}
                disabled={penuh && !sudah}
                className={`${sudah ? btnOutline : btnPrimary} w-full shrink-0 md:w-auto`}
              >
                {sudah ? "Batalkan pendaftaran" : "Daftar sekarang"}
              </button>
            </Card>
          );
        })}
      </div>
    </>
  );
}

// MATERI
function Materi() {
  const [tab, setTab] = useState("Semua");
  const [q, setQ] = useState("");
  const tabs = ["Semua", "Slide", "Modul", "Video"];

  const hasil = materiData.filter(
    (m) =>
      (tab === "Semua" || m.tipe === tab) &&
      `${m.judul} ${m.pelatihan}`.toLowerCase().includes(q.toLowerCase())
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
                  ? "bg-storm-500 text-white"
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

      {hasil.length === 0 ? (
        <Card className="py-10 text-center text-sm text-storm-500">
          Tidak ada materi yang cocok.
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {hasil.map((m) => {
            const Icon = tipeIcon[m.tipe];

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
                    {m.pelatihan} · {m.ukuran}
                  </p>
                  <div className="mt-2"><Badge>{m.tipe}</Badge></div>
                </div>
                <button
                  type="button"
                  className={btnOutline}
                  aria-label={m.tipe === "Video" ? "Tonton video" : "Unduh materi"}
                  title="Aksi materi (perlu dihubungkan ke file)"
                >
                  {m.tipe === "Video" ? <PlayCircle size={16} /> : <Download size={16} />}
                </button>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

// UNGGAH HASIL KARYA
function HasilKarya({setDaftar }) {
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
            <label htmlFor="judul-karya" className="mb-1.5 block text-sm font-medium text-storm-800">
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
            <label htmlFor="deskripsi-karya" className="mb-1.5 block text-sm font-medium text-storm-800">
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
              <span className="text-xs text-storm-500">PDF, DOC, DOCX, PPT, PPTX, MP4</span>
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4"
                className="sr-only"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <button type="submit" disabled={!judul.trim() || !file} className={btnPrimary}>
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

// PUBLIKASI KARYA DAN LIKE
function PublikasiKarya({ daftar }) {
  const [disukai, setDisukai] = useState([]);

  return (
    <>
      <SectionTitle
        title="Karya Peserta"
        desc="Lihat karya yang dibagikan dan berikan apresiasi dengan tombol suka."
      />

      {daftar.length === 0 ? (
        <Card className="py-10 text-center text-sm text-storm-500">
          Belum ada karya yang dipublikasikan.
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {daftar.map((item) => {
            const sudahLike = disukai.includes(item.id);

            return (
              <Card key={item.id}>
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-storm-50">
                  <BookOpen size={42} className="text-storm-400" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-storm-500">{item.pembuat || "Peserta Pelatihan"}</p>
                  <Badge tone={item.status === "Dipublikasikan" ? "success" : "warn"}>
                    {item.status || "Dipublikasikan"}
                  </Badge>
                </div>
                <h3 className="mt-2 font-semibold text-storm-800">{item.judul}</h3>
                {item.deskripsi && (
                  <p className="mt-2 text-sm leading-6 text-storm-500">{item.deskripsi}</p>
                )}
                {item.fileNama && (
                  <p className="mt-2 break-all text-xs text-storm-500">File: {item.fileNama}</p>
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
                          : [...prev, item.id]
                      )
                    }
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      sudahLike
                        ? "bg-rose-50 text-rose-600"
                        : "bg-storm-50 text-storm-600 hover:bg-storm-100"
                    }`}
                  >
                    <Heart size={17} className={sudahLike ? "fill-current" : ""} />
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
      <div className="space-y-3">
        {sertifikatData.map((s) => (
          <Card key={s.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold leading-6 text-storm-800">{s.judul}</h3>
              <p className="mt-1 text-sm text-storm-500">{s.tanggal}</p>
              <div className="mt-3">
                <Badge tone={s.tersedia ? "success" : "warn"}>
                  {s.tersedia ? "Tersedia" : "Belum tersedia"}
                </Badge>
              </div>
            </div>
            <button type="button" disabled={!s.tersedia} className={`${btnOutline} w-full sm:w-auto`}>
              <Download size={16} />
              Unduh sertifikat
            </button>
          </Card>
        ))}
      </div>
    </>
  );
}

// GALERI KEGIATAN
const galeriData = [
  { id: 1, judul: "Kegiatan Pelatihan Guru", keterangan: "Dokumentasi kegiatan pelatihan" },
  { id: 2, judul: "Penyampaian Materi", keterangan: "Sesi berbagi pengetahuan" },
  { id: 3, judul: "Diskusi dan Praktik", keterangan: "Kolaborasi antarpeserta" },
];

function Galeri() {
  return (
    <>
      <SectionTitle
        title="Galeri Kegiatan"
        desc="Dokumentasi kegiatan pelatihan guru SMKN 1 Batam."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {galeriData.map((item) => (
          <Card key={item.id}>
            <div className="flex h-40 items-center justify-center rounded-xl bg-storm-50">
              <Images size={42} className="text-storm-400" />
            </div>
            <h3 className="mt-4 font-semibold text-storm-800">{item.judul}</h3>
            <p className="mt-1 text-sm text-storm-500">{item.keterangan}</p>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-xs text-storm-500">
        Ilustrasi sementara. Foto kegiatan asli dapat ditambahkan kemudian.
      </p>
    </>
  );
}

// EVALUASI KEGIATAN
function Evaluasi() {
  const [pilih, setPilih] = useState(pelatihanData[0].id);
  const [rating, setRating] = useState(0);
  const [komentar, setKomentar] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  if (terkirim) {
    return (
      <Card className="mx-auto w-full max-w-xl py-10 text-center">
        <CheckCircle2 size={44} className="mx-auto text-emerald-500" />
        <h3 className="mt-3 text-lg font-bold text-storm-800">Evaluasi terkirim</h3>
        <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-storm-500">
          Terima kasih. Masukan Anda membantu meningkatkan kualitas pelatihan.
        </p>
        <button
          className={`${btnOutline} mt-5`}
          onClick={() => {
            setTerkirim(false);
            setRating(0);
            setKomentar("");
          }}
        >
          Isi evaluasi lain
        </button>
      </Card>
    );
  }

  return (
    <>
      <SectionTitle
        title="Evaluasi Kegiatan"
        desc="Berikan penilaian dan saran untuk pelatihan yang sudah diikuti."
      />
      <Card className="w-full max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (rating > 0) setTerkirim(true);
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="pilih-pelatihan" className="mb-2 block text-sm font-semibold text-storm-800">
              Pelatihan
            </label>
            <select
              id="pilih-pelatihan"
              value={pilih}
              onChange={(e) => setPilih(Number(e.target.value))}
              className={inputClass}
            >
              {pelatihanData.map((p) => (
                <option key={p.id} value={p.id}>{p.judul}</option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-storm-800">
              Penilaian keseluruhan
            </legend>
            <div className="flex flex-wrap items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setRating(n)}
                  aria-label={`${n} bintang`}
                  aria-pressed={rating === n}
                  className="rounded-md p-0.5 transition hover:scale-110"
                >
                  <Star size={30} className={n <= rating ? "fill-amber-400 text-amber-400" : "text-storm-200"} />
                </button>
              ))}
              {rating > 0 && <span className="ml-2 text-sm text-storm-600">{rating}/5</span>}
            </div>
            {rating === 0 && (
              <p className="mt-2 text-xs text-storm-500">Pilih jumlah bintang sebelum mengirim.</p>
            )}
          </fieldset>

          <div>
            <label htmlFor="komentar-evaluasi" className="mb-2 block text-sm font-semibold text-storm-800">
              Saran dan komentar
            </label>
            <textarea
              id="komentar-evaluasi"
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
              rows={4}
              placeholder="Tuliskan saran atau komentar Anda"
              className={`${inputClass} resize-y`}
            />
          </div>

          <button type="submit" disabled={rating === 0} className={btnPrimary}>
            <ClipboardCheck size={16} />
            Kirim evaluasi
          </button>
        </form>
      </Card>
    </>
  );
}

// BERITA
const beritaData = [
  {
    id: 1,
    kategori: "Pelatihan",
    judul: "Dokumentasi Pelatihan Guru",
    tanggal: "September 2026",
    isi: "Informasi dan dokumentasi kegiatan pelatihan guru untuk mendukung berbagi pengetahuan.",
  },
  {
    id: 2,
    kategori: "Informasi",
    judul: "Berbagi Materi Pembelajaran Digital",
    tanggal: "Oktober 2026",
    isi: "Materi pelatihan dapat dimanfaatkan sebagai referensi dalam mengembangkan pembelajaran.",
  },
  {
    id: 3,
    kategori: "Pengumuman",
    judul: "Publikasi Hasil Karya Peserta",
    tanggal: "Oktober 2026",
    isi: "Hasil karya peserta dapat menjadi inspirasi bagi guru lain untuk mengembangkan materi ajar.",
  },
];

function Berita() {
  return (
    <>
      <SectionTitle
        title="Berita dan Informasi"
        desc="Informasi seputar kegiatan dan publikasi hasil pelatihan."
      />
      <div className="space-y-4">
        {beritaData.map((item) => (
          <Card key={item.id}>
            <Badge>{item.kategori}</Badge>
            <h3 className="mt-3 font-semibold text-storm-800">{item.judul}</h3>
            <p className="mt-1 text-xs text-storm-500">{item.tanggal}</p>
            <p className="mt-3 text-sm leading-6 text-storm-600">{item.isi}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

// TESTIMONI PESERTA
function Testimoni() {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  const [daftar, setDaftar] = useState([
    {
      id: 1,
      nama: "Peserta Pelatihan",
      isi: "Pelatihan memberikan wawasan baru yang dapat diterapkan dalam pembelajaran.",
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
            <label htmlFor="nama-testimoni" className="mb-1 block text-sm font-medium text-storm-800">
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
            <label htmlFor="isi-testimoni" className="mb-1 block text-sm font-medium text-storm-800">
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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {daftar.map((item) => (
          <Card key={item.id}>
            <MessageSquareQuote size={24} className="text-storm-500" />
            <p className="mt-3 text-sm leading-6 text-storm-600">“{item.isi}”</p>
            <p className="mt-4 text-sm font-semibold text-storm-800">{item.nama}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

// PENGEMBANGAN SKILL
const skillData = [
  {
    id: 1,
    judul: "Media Ajar Digital",
    deskripsi: "Mempelajari pengembangan media ajar untuk mendukung pembelajaran.",
    kategori: "Media Pembelajaran",
  },
  {
    id: 2,
    judul: "Penyusunan Modul Ajar",
    deskripsi: "Meningkatkan kemampuan menyusun modul pembelajaran.",
    kategori: "Pengembangan Materi",
  },
  {
    id: 3,
    judul: "Pemanfaatan Teknologi",
    deskripsi: "Mengenal pemanfaatan teknologi dalam kegiatan belajar mengajar.",
    kategori: "Teknologi Pendidikan",
  },
];

function PengembanganSkill() {
  return (
    <>
      <SectionTitle
        title="Pengembangan Skill"
        desc="Jelajahi topik untuk mendukung pengembangan keterampilan guru."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillData.map((item) => (
          <Card key={item.id}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-storm-100 text-storm-600">
              <Sparkles size={23} />
            </div>
            <p className="mt-4 text-xs font-medium text-storm-500">{item.kategori}</p>
            <h3 className="mt-1 font-semibold text-storm-800">{item.judul}</h3>
            <p className="mt-2 text-sm leading-6 text-storm-500">{item.deskripsi}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

// DASHBOARD GURU
export default function DashboardGuru({ onLogout }) {
  const [view, setView] = useState("beranda");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terdaftar, setTerdaftar] = useState([1]);
  const [daftarKarya, setDaftarKarya] = useState([
    {
      id: 101,
      judul: "Modul Ajar Dasar Desain Grafis",
      pembuat: "Guru Produktif",
      deskripsi: "Contoh karya pembelajaran yang dibagikan untuk peserta lain.",
      tanggal: "10 Okt 2026",
      status: "Dipublikasikan",
      likes: 12,
    },
    {
      id: 102,
      judul: "Media Ajar Interaktif",
      pembuat: "Peserta Pelatihan",
      deskripsi: "Contoh media ajar digital untuk mendukung proses belajar.",
      tanggal: "12 Okt 2026",
      status: "Dipublikasikan",
      likes: 8,
    },
  ]);

  const nama = "Guru";

  const toggleDaftar = (id) => {
    setTerdaftar((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const halaman = {
    beranda: (
      <Beranda
        nama={nama}
        terdaftar={terdaftar}
        setView={setView}
        jumlahKarya={daftarKarya.length}
      />
    ),
    pelatihan: (
      <Pelatihan terdaftar={terdaftar} toggleDaftar={toggleDaftar} />
    ),
    materi: <Materi />,
    karya: <HasilKarya daftar={daftarKarya} setDaftar={setDaftarKarya} />,
    publikasi: <PublikasiKarya daftar={daftarKarya} />,
    sertifikat: <Sertifikat />,
    galeri: <Galeri />,
    evaluasi: <Evaluasi />,
    berita: <Berita />,
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
            <h1 className="text-xl font-bold tracking-wide text-storm-800">EDUSHARE</h1>
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
                      ? "bg-storm-500 text-white shadow-sm"
                      : "text-storm-600 hover:bg-storm-50 hover:text-storm-800"
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
            onClick={onLogout}
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
              <h2 className="truncate font-semibold text-storm-800">{judulHalaman}</h2>
            </div>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-storm-100 font-bold text-storm-700">
              G
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
            © 2026 EDUSHARE — Dokumentasi dan Publikasi Hasil Pelatihan Guru SMKN 1 Batam
          </footer>
        </main>
      </div>
    </div>
  );
}
