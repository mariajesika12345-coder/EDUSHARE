
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BookOpen,
  Newspaper,
  Images,
  ClipboardCheck,
  Heart,
  LogOut,
  Menu,
  X,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Upload,
  ExternalLink,
  Play,
  Presentation,
  Gamepad2,
} from "lucide-react";

const initialGuru = [
  { id: 1, nama: "Siti Rahmawati", email: "siti.rahmawati@smkn1batam.sch.id", peran: "Guru" },
  { id: 2, nama: "Andi Saputra", email: "andi.saputra@smkn1batam.sch.id", peran: "Guru" },
  { id: 3, nama: "Dewi Lestari", email: "dewi.lestari@smkn1batam.sch.id", peran: "Peserta" },
  { id: 4, nama: "Budi Santoso", email: "budi.santoso@smkn1batam.sch.id", peran: "Peserta" },
];
const initialPelatihan = [
  { id: 1, judul: "Pemanfaatan Generative AI untuk Pembelajaran", tanggal: "3 September 2026", lokasi: "SMKN 1 Batam", peserta: 32, kuota: 40 },
  { id: 2, judul: "Pembuatan Media Ajar Digital", tanggal: "27 Oktober 2026", lokasi: "Lab Komputer 2, SMKN 1 Batam", peserta: 18, kuota: 30 },
  { id: 3, judul: "Pengembangan Modul Pembelajaran Interaktif", tanggal: "3 November 2026", lokasi: "Ruang Rapat Utama, SMKN 1 Batam", peserta: 18, kuota: 50 },
];
const initialKarya = [
  { id: 1, judul: "Kuis Interaktif Materi Bahasa Inggris", pembuat: "Siti Rahmawati", status: "Menunggu verifikasi" },
  { id: 2, judul: "Modul Pembelajaran Digital", pembuat: "Andi Saputra", status: "Dipublikasikan" },
  { id: 3, judul: "Video Penjelasan Materi", pembuat: "Dewi Lestari", status: "Perlu revisi" },
];
const initialBerita = [
  { id: 1, judul: "Pelatihan Guru SMKN 1 Batam", isi: "Guru mengikuti kegiatan pelatihan untuk mengenal pemanfaatan teknologi digital dan Generative AI dalam menyiapkan media pembelajaran.", tanggal: "3 September 2026" },
  { id: 2, judul: "Kumpulan Karya Pembelajaran Digital", isi: "Hasil karya peserta pelatihan mulai dikumpulkan sebagai dokumentasi dan bahan berbagi antarguru.", tanggal: "10 September 2026" },
];

const initialMateri = [
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
const initialSertifikat = [
  {
    id: 1,
    judul: "Pemanfaatan Generative AI untuk Pembelajaran",
    tanggal: "3 September 2026",
    status: "Sertifikat tersedia",
    peserta: [
      "Siti Rahmawati",
      "Andi Saputra",
      "Dewi Lestari",
      "Budi Santoso",
    ],
  },
  {
    id: 2,
    judul: "Pembuatan Media Ajar Digital",
    tanggal: "27 Oktober 2026",
    status: "Menunggu pelatihan selesai",
    peserta: ["Siti Rahmawati", "Andi Saputra"],
  },
  {
    id: 3,
    judul: "Pengembangan Modul Pembelajaran Interaktif",
    tanggal: "3 November 2026",
    status: "Menunggu pelatihan selesai",
    peserta: ["Dewi Lestari", "Budi Santoso"],
  },
];
const menu = [
  { key: "beranda", label: "Beranda", icon: LayoutDashboard },
  { key: "pengguna", label: "Guru & Peserta", icon: Users },
  { key: "pelatihan", label: "Kelola Pelatihan", icon: CalendarDays },
  { key: "slide", label: "Kelola Slide/Presentasi", icon: Presentation },
  { key: "modul", label: "Kelola Modul Pelatihan", icon: BookOpen },
  { key: "video", label: "Kelola Video Pelatihan", icon: Play },
  { key: "karya", label: "Kelola Hasil Karya", icon: Heart },
  { key: "berita", label: "Kelola Berita", icon: Newspaper },
  { key: "evaluasi", label: "Evaluasi Kegiatan", icon: ClipboardCheck },
  { key: "sertifikat", label: "Kelola Sertifikat Peserta", icon: FileText },
  { key: "galeri", label: "Kelola Galeri Dokumentasi", icon: Images },
  { key: "testimoni", label: "Kelola Testimoni Peserta", icon: Heart },
  { key: "skill", label: "Pengembangan Skill", icon: BookOpen },
];

const inputClass =
  "w-full rounded-lg border border-storm-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-storm-400 focus:outline-none focus:ring-2 focus:ring-storm-100";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-storm-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-storm-600 disabled:cursor-not-allowed disabled:opacity-50";

const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-storm-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-storm-50";

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-storm-100 bg-white p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ title, desc }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      {desc && <p className="mt-1 text-sm text-slate-500">{desc}</p>}
    </div>
  );
}

function Badge({ children, success = false }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        success
          ? "bg-emerald-50 text-emerald-700"
          : "bg-storm-100 text-slate-700"
      }`}
    >
      {children}
    </span>
  );
}

function EmptyState({ icon: Icon, title, desc }) {
  return (
    <Card className="py-10 text-center">
      <Icon size={38} className="mx-auto text-slate-400" />
      <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
    </Card>
  );
}

function BerandaAdmin({ guru, pelatihan, materi, karya, setView }) {
  const stats = [
    { label: "Guru & Peserta", value: guru.length, icon: Users },
    { label: "Pelatihan", value: pelatihan.length, icon: CalendarDays },
    { label: "Materi", value: materi.length, icon: BookOpen },
    { label: "Hasil Karya", value: karya.length, icon: Heart },
  ];

  const karyaMenunggu = karya.filter(
    (item) => item.status === "Menunggu verifikasi"
  ).length;

  return (
    <>
      <section className="mb-6 rounded-2xl bg-storm-500 p-6 text-white shadow-sm sm:p-7">
        <p className="text-sm !text-white">Selamat datang</p>
        <h1 className="mt-1 text-3xl font-bold !text-white">Admin EDUSHARE</h1>
        <button
          onClick={() => setView("materi")}
          className="mt-5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-storm-50"
        >
          Lihat materi
        </button>
      </section>

      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-storm-100 text-slate-600">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <section>
          <SectionTitle
            title="Aktivitas terbaru"
            desc="Ringkasan aktivitas yang perlu diperhatikan."
          />
          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="text-amber-500" size={20} />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {karyaMenunggu} karya menunggu verifikasi
                </p>
                <p className="text-xs text-slate-500">
                  Periksa karya yang dikirim peserta.
                </p>
              </div>
              <button
                className="ml-auto text-sm font-semibold text-slate-600"
                onClick={() => setView("karya")}
              >
                Lihat
              </button>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-slate-500" size={20} />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {materi.length} materi tersedia
                </p>
                <p className="text-xs text-slate-500">
                  PPT, video pembelajaran, dan kuis interaktif.
                </p>
              </div>
              <button
                className="ml-auto text-sm font-semibold text-slate-600"
                onClick={() => setView("materi")}
              >
                Lihat
              </button>
            </div>
          </Card>
        </section>

        <section>
          <SectionTitle title="Akses cepat" desc="Buka fitur pengelolaan." />
          <Card className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {menu.slice(1, 5).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className="flex items-center gap-3 rounded-lg bg-storm-50 p-3 text-left text-sm font-medium text-slate-700 hover:bg-storm-100"
              >
                <Icon size={19} />
                {label}
              </button>
            ))}
          </Card>
        </section>
      </div>
    </>
  );
}

function KelolaPengguna({ data, setData }) {
  const [q, setQ] = useState("");

  const hasil = data.filter((item) =>
    `${item.nama} ${item.email} ${item.peran}`
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  return (
    <>
      <SectionTitle
        title="Guru & Peserta"
        desc="Lihat daftar pengguna yang tercatat pada sistem."
      />

      <div className="relative mb-4">
        <Search
          size={17}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari nama, email, atau peran"
          className={`${inputClass} pl-9`}
        />
      </div>

      {hasil.length === 0 ? (
        <EmptyState
          icon={Users}
          title={q ? "Pengguna tidak ditemukan" : "Belum ada data pengguna"}
          desc={
            q
              ? "Coba gunakan kata kunci pencarian lain."
              : "Daftar guru dan peserta akan ditampilkan setelah datanya tersedia."
          }
        />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-storm-100 text-slate-500">
                <th className="p-3">Nama</th>
                <th className="p-3">Email</th>
                <th className="p-3">Peran</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {hasil.map((item) => (
                <tr key={item.id} className="border-b border-storm-50">
                  <td className="p-3 font-medium text-slate-800">
                    {item.nama}
                  </td>
                  <td className="p-3 text-slate-500">{item.email}</td>
                  <td className="p-3">
                    <Badge>{item.peran}</Badge>
                  </td>
                  <td className="p-3">
                    <button
                      className="rounded-lg p-2 text-rose-600 hover:bg-rose-50"
                      title="Hapus pengguna"
                      aria-label={`Hapus ${item.nama}`}
                      onClick={() =>
                        setData((prev) =>
                          prev.filter((u) => u.id !== item.id)
                        )
                      }
                    >
                      <Trash2 size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </>
  );
}

function KelolaPelatihan({ data, setData }) {
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [kuota, setKuota] = useState("30");
  const [formBuka, setFormBuka] = useState(false);

  const tambah = (e) => {
    e.preventDefault();

    if (!judul.trim() || !tanggal || !lokasi.trim() || Number(kuota) < 1) {
      return;
    }

    const tanggalFormat = new Date(`${tanggal}T00:00:00`).toLocaleDateString(
      "id-ID",
      { day: "numeric", month: "long", year: "numeric" }
    );

    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        judul: judul.trim(),
        tanggal: tanggalFormat,
        lokasi: lokasi.trim(),
        peserta: 0,
        kuota: Number(kuota),
      },
    ]);

    setJudul("");
    setTanggal("");
    setLokasi("");
    setKuota("30");
    setFormBuka(false);
  };

  return (
    <>
      <SectionTitle
        title="Kelola Pelatihan"
        desc="Tambah dan perbarui informasi kegiatan pelatihan."
      />

      <button
        className={`${btnPrimary} mb-5`}
        onClick={() => setFormBuka((v) => !v)}
      >
        <Plus size={17} />
        {formBuka ? "Tutup formulir" : "Tambah pelatihan"}
      </button>

      {formBuka && (
        <Card className="mb-5 max-w-2xl">
          <form onSubmit={tambah} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Judul pelatihan
              </label>
              <input
                required
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className={inputClass}
                placeholder="Masukkan judul pelatihan"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Tanggal</label>
              <input
                required
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Lokasi</label>
              <input
                required
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                className={inputClass}
                placeholder="Masukkan lokasi kegiatan"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Kuota peserta
              </label>
              <input
                required
                min="1"
                type="number"
                value={kuota}
                onChange={(e) => setKuota(e.target.value)}
                className={inputClass}
              />
            </div>

            <button type="submit" className={btnPrimary}>
              Simpan pelatihan
            </button>
          </form>
        </Card>
      )}

      {data.length === 0 ? (
        <EmptyState
          icon={CalendarDays}
          title="Belum ada data pelatihan"
          desc="Klik Tambah pelatihan untuk memasukkan informasi kegiatan."
        />
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-800">{item.judul}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  <CalendarDays size={15} className="mr-1 inline" />
                  {item.tanggal}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.lokasi}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Peserta: {item.peserta}/{item.kuota}
                </p>
              </div>

              <button
                className={`${btnOutline} text-rose-600`}
                onClick={() =>
                  setData((prev) => prev.filter((p) => p.id !== item.id))
                }
              >
                <Trash2 size={16} />
                Hapus
              </button>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function KelolaMateri({ data, setData }) {
  const [judul, setJudul] = useState("");
  const [namaFile, setNamaFile] = useState("");
  const [tipe, setTipe] = useState("PPT");
  const [pelatihan, setPelatihan] = useState("");
  const [file, setFile] = useState("");

  const tambah = (e) => {
    e.preventDefault();

    if (!judul.trim() || !namaFile.trim() || !pelatihan.trim() || !file.trim()) {
      return;
    }

    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        judul: judul.trim(),
        namaFile: namaFile.trim(),
        tipe,
        pelatihan: pelatihan.trim(),
        file: file.trim(),
      },
    ]);

    setJudul("");
    setNamaFile("");
    setTipe("PPT");
    setPelatihan("");
    setFile("");
  };

  const ikonMateri = (tipe) => {
    if (tipe === "Video") return Play;
    if (tipe === "Kuis") return Gamepad2;
    if (tipe === "PPT") return Presentation;
    return FileText;
  };

  return (
    <>
            <SectionTitle title="Kelola Materi" />

      <Card className="mb-5">
        <h3 className="mb-4 font-semibold text-slate-800">Tambah materi</h3>
        <form onSubmit={tambah} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Judul materi</label>
            <input
              required
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className={inputClass}
              placeholder="Contoh: Materi Announcement"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Nama file</label>
            <input
              required
              value={namaFile}
              onChange={(e) => setNamaFile(e.target.value)}
              className={inputClass}
              placeholder="Contoh: materi.pptx"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Jenis materi</label>
            <select
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
              className={inputClass}
            >
              <option value="PPT">PPT</option>
              <option value="Video">Video</option>
              <option value="Kuis">Kuis</option>
              <option value="Modul">Modul</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Kategori materi</label>
            <input
              required
              value={pelatihan}
              onChange={(e) => setPelatihan(e.target.value)}
              className={inputClass}
              placeholder="Contoh: Materi presentasi"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium">
              Lokasi file di folder public
            </label>
            <input
              required
              value={file}
              onChange={(e) => setFile(e.target.value)}
              className={inputClass}
              placeholder="/materi/nama-file.pptx"
            />
            <p className="mt-1 text-xs text-slate-500">
              Contoh: /materi/materi.pptx
            </p>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className={btnPrimary}>
              <Plus size={16} />
              Tambah materi
            </button>
          </div>
        </form>
      </Card>

      <SectionTitle
        title="Daftar Materi"
        desc={`${data.length} materi tersedia di Dashboard Admin.`}
      />

      {data.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="Belum ada materi"
          desc="Tambahkan materi menggunakan formulir di atas."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {data.map((item) => {
            const Icon = ikonMateri(item.tipe);

            return (
              <Card key={item.id} className="flex min-w-0 flex-col">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-storm-100 text-slate-600">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words font-semibold text-slate-800">
                      {item.judul}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>{item.tipe}</Badge>
                      <Badge>{item.pelatihan}</Badge>
                    </div>
                  </div>

                  <button
                    className="shrink-0 rounded-lg p-2 text-rose-600 hover:bg-rose-50"
                    aria-label={`Hapus ${item.judul}`}
                    title="Hapus materi"
                    onClick={() =>
                      setData((prev) => prev.filter((m) => m.id !== item.id))
                    }
                  >
                    <Trash2 size={17} />
                  </button>
                </div>

                <div className="mt-4 rounded-lg bg-storm-50 p-3">
                  <p className="break-all text-xs text-slate-600">
                    <FileText size={14} className="mr-1 inline" />
                    {item.namaFile || item.file}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tipe === "Video" ? (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className={btnPrimary}
                    >
                      <Play size={16} />
                      Putar Video
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className={btnPrimary}
                    >
                      <ExternalLink size={16} />
                      {item.tipe === "Kuis" ? "Buka Kuis" : "Buka Materi"}
                    </a>
                  )}

                  <a
                    href={item.file}
                    download={item.tipe === "Kuis" ? undefined : item.namaFile}
                    className={btnOutline}
                  >
                    Unduh File
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-xs leading-5 text-slate-500">
        File harus tersedia di folder public/materi agar tautan dapat dibuka.
        Penambahan melalui formulir hanya mencatat lokasi file, bukan
        mengunggah file ke server.
      </p>
    </>
  );
}

function KelolaKarya({ data, setData }) {
  const ubahStatus = (id, status) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <>
      <SectionTitle
        title="Kelola Hasil Karya"
        desc="Tinjau hasil karya peserta sebelum dipublikasikan."
      />

      {data.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="Belum ada hasil karya"
          desc="Hasil karya yang dikirim peserta akan ditampilkan di sini."
        />
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">{item.judul}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Pengirim: {item.pembuat}
                  </p>
                  <div className="mt-3">
                    <Badge success={item.status === "Dipublikasikan"}>
                      {item.status}
                    </Badge>
                  </div>
                </div>

                <button
                  className={`${btnOutline} text-rose-600`}
                  aria-label={`Hapus karya ${item.judul}`}
                  onClick={() =>
                    setData((prev) => prev.filter((k) => k.id !== item.id))
                  }
                >
                  <Trash2 size={16} />
                  Hapus
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-storm-100 pt-4">
                <button
                  className={btnPrimary}
                  onClick={() => ubahStatus(item.id, "Dipublikasikan")}
                >
                  <CheckCircle2 size={16} />
                  Publikasikan
                </button>

                <button
                  className={btnOutline}
                  onClick={() => ubahStatus(item.id, "Perlu revisi")}
                >
                  Perlu revisi
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function KelolaBerita({ data, setData }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const tambah = (e) => {
    e.preventDefault();
    if (!judul.trim() || !isi.trim()) return;

    setData((prev) => [
      {
        id: Date.now(),
        judul: judul.trim(),
        isi: isi.trim(),
        tanggal: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      ...prev,
    ]);

    setJudul("");
    setIsi("");
  };

  return (
    <>
      <SectionTitle
        title="Kelola Berita"
        desc="Tambahkan informasi dan berita kegiatan pelatihan."
      />

      <Card className="mb-5 max-w-2xl">
        <form onSubmit={tambah} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Judul berita</label>
            <input
              required
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className={inputClass}
              placeholder="Masukkan judul berita"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Isi berita</label>
            <textarea
              required
              rows={4}
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              className={inputClass}
              placeholder="Tuliskan informasi kegiatan"
            />
          </div>

          <button type="submit" className={btnPrimary}>
            <Plus size={16} />
            Tambah berita
          </button>
        </form>
      </Card>

      {data.length === 0 ? (
        <EmptyState
          icon={Newspaper}
          title="Belum ada berita"
          desc="Berita yang ditambahkan akan ditampilkan di sini."
        />
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-800">{item.judul}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.tanggal}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.isi}
                  </p>
                </div>

                <button
                  className="rounded-lg p-2 text-rose-600 hover:bg-rose-50"
                  aria-label={`Hapus berita ${item.judul}`}
                  onClick={() =>
                    setData((prev) => prev.filter((b) => b.id !== item.id))
                  }
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function EvaluasiAdmin() {
  return (
    <>
      <SectionTitle
        title="Evaluasi Kegiatan"
        desc="Lihat hasil evaluasi kegiatan pelatihan."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { judul: "Pemanfaatan Generative AI untuk Pembelajaran", peserta: 32, rating: "4,8/5", ringkasan: "Peserta merasa materi bermanfaat dan mudah diterapkan." },
          { judul: "Pembuatan Media Ajar Digital", peserta: 18, rating: "4,6/5", ringkasan: "Peserta menyukai praktik langsung membuat media ajar." },
          { judul: "Pengembangan Modul Interaktif", peserta: 18, rating: "4,7/5", ringkasan: "Peserta menyarankan tambahan waktu untuk praktik." },
        ].map((item) => (
          <Card key={item.judul}>
            <div className="flex items-center gap-2 text-amber-500">
              <ClipboardCheck size={20} />
              <span className="font-semibold">{item.rating}</span>
            </div>
            <h3 className="mt-3 font-semibold text-slate-800">{item.judul}</h3>
            <p className="mt-2 text-sm text-slate-500">{item.peserta} tanggapan peserta</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.ringkasan}</p>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">Contoh data sementara untuk tampilan, bukan hasil evaluasi asli.</p>
    </>
  );
}


function DataSederhanaAdmin({ title, desc, items }) {
  return (
    <>
      <SectionTitle title={title} desc={desc} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.judul}>
            <h3 className="font-semibold text-slate-800">{item.judul}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.keterangan}</p>
            <span className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Data contoh</span>
          </Card>
        ))}
      </div>
    </>
  );
}

function KelolaSertifikat({ data }) {
  const [pelatihanTerpilih, setPelatihanTerpilih] = useState(null);

  return (
    <>
      <SectionTitle
        title="Kelola Sertifikat Peserta"
        desc="Pantau sertifikat dan peserta yang berhak menerimanya."
      />

      <div className="space-y-4">
        {data.map((item) => {
          const tersedia = item.status === "Sertifikat tersedia";
          const terbuka = pelatihanTerpilih === item.id;

          return (
            <Card key={item.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {item.judul}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    <CalendarDays size={15} className="mr-1 inline" />
                    {item.tanggal}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.peserta.length} peserta
                  </p>
                  <div className="mt-3">
                    <Badge success={tersedia}>{item.status}</Badge>
                  </div>
                </div>

                <button
                  className={btnOutline}
                  onClick={() =>
                    setPelatihanTerpilih(terbuka ? null : item.id)
                  }
                >
                  <Users size={16} />
                  {terbuka ? "Tutup Daftar" : "Lihat Peserta"}
                </button>
              </div>

              {terbuka && (
                <div className="mt-4 border-t border-storm-100 pt-4">
                  {item.peserta.map((nama, index) => (
                    <div
                      key={`${item.id}-${nama}`}
                      className="flex items-center justify-between gap-3 border-b border-storm-50 py-3 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {nama}
                        </p>
                        <p className="text-xs text-slate-500">
                          Peserta {index + 1}
                        </p>
                      </div>
                      <Badge success={tersedia}>
                        {tersedia ? "Tersedia" : "Belum tersedia"}
                      </Badge>
                    </div>
                  ))}

                  <p className="mt-3 rounded-lg bg-storm-50 p-3 text-sm leading-6 text-slate-600">
                    Sertifikat tersedia setelah pelatihan selesai dan peserta
                    memenuhi persyaratan.
                  </p>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Data peserta masih berupa contoh. Pembuatan dan unduhan sertifikat PDF
        otomatis memerlukan integrasi backend Laravel.
      </p>
    </>
  );
}

function DokumentasiAdmin() {
  const [foto, setFoto] = useState([
    { id: "dummy-1", nama: "Dokumentasi Pelatihan Guru", url: "/pelatihan-guru.jpg" },
  ]);

  const pilihFoto = (e) => {
    const files = Array.from(e.target.files || []);

    setFoto((prev) => [
      ...prev,
      ...files.map((file) => ({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        nama: file.name,
        url: URL.createObjectURL(file),
      })),
    ]);

    e.target.value = "";
  };

  return (
    <>
      <SectionTitle
        title="Dokumentasi & Galeri"
        desc="Tambahkan foto kegiatan untuk pratinjau galeri."
      />

      <Card>
        <label className={`${btnPrimary} cursor-pointer`}>
          <Upload size={17} />
          Pilih foto kegiatan
          <input
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={pilihFoto}
          />
        </label>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Foto hanya ditampilkan sementara di browser. File belum diunggah ke
          server.
        </p>
      </Card>

      {foto.length === 0 ? (
        <div className="mt-5">
          <EmptyState
            icon={Images}
            title="Belum ada dokumentasi"
            desc="Pilih foto kegiatan untuk menampilkannya di galeri."
          />
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {foto.map((item) => (
            <Card key={item.id}>
              <img
                src={item.url}
                alt={item.nama}
                className="h-44 w-full rounded-lg object-cover"
              />
              <p className="mt-3 break-all text-sm font-medium text-slate-800">
                {item.nama}
              </p>
              <button
                className={`${btnOutline} mt-3 w-full text-rose-600`}
                onClick={() => {
                  URL.revokeObjectURL(item.url);
                  setFoto((prev) => prev.filter((f) => f.id !== item.id));
                }}
              >
                <Trash2 size={16} />
                Hapus foto
              </button>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default function DashboardAdmin({ onLogout }) {
  const [view, setView] = useState("beranda");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [guru, setGuru] = useState(initialGuru);
  const [pelatihan, setPelatihan] = useState(initialPelatihan);
  const [materi, setMateri] = useState(initialMateri);
  const [karya, setKarya] = useState(initialKarya);
  const [berita, setBerita] = useState(initialBerita);
  const [sertifikat] = useState(initialSertifikat);

  const halaman = {
    beranda: (
      <BerandaAdmin
        guru={guru}
        pelatihan={pelatihan}
        materi={materi}
        karya={karya}
        setView={setView}
      />
    ),
    pengguna: <KelolaPengguna data={guru} setData={setGuru} />,
    pelatihan: <KelolaPelatihan data={pelatihan} setData={setPelatihan} />,
    slide: <KelolaMateri data={materi} setData={setMateri} />,
    modul: <KelolaMateri data={materi} setData={setMateri} />,
    video: <KelolaMateri data={materi} setData={setMateri} />,
    karya: <KelolaKarya data={karya} setData={setKarya} />,
    berita: <KelolaBerita data={berita} setData={setBerita} />,
    evaluasi: <EvaluasiAdmin />,
    sertifikat: <KelolaSertifikat data={sertifikat} />,    galeri: <DokumentasiAdmin />,
    testimoni: <DataSederhanaAdmin title="Kelola Testimoni Peserta" desc="Lihat testimoni yang dibagikan guru setelah mengikuti pelatihan." items={[{ judul: "Siti Rahmawati", keterangan: "Materi pelatihan mudah dipahami dan bisa diterapkan saat membuat media pembelajaran." }, { judul: "Andi Saputra", keterangan: "Kegiatan membantu saya mendapatkan ide baru untuk membuat media ajar digital." }]} />,
    skill: <DataSederhanaAdmin title="Pengembangan Skill" desc="Kelola informasi pengembangan keterampilan guru." items={[{ judul: "Membuat Media Ajar Digital", keterangan: "Latihan membuat kuis, modul, dan presentasi untuk pembelajaran." }, { judul: "Pemanfaatan Teknologi Pembelajaran", keterangan: "Informasi pengembangan keterampilan menggunakan teknologi untuk kegiatan belajar mengajar." }]} />,
  };

  const judulHalaman =
    menu.find((item) => item.key === view)?.label || "Beranda";

  return (
    <div className="min-h-screen bg-storm-50 text-slate-800">
      {sidebarOpen && (
        <button
          aria-label="Tutup menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-storm-100 bg-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-[80px] shrink-0 items-center justify-between border-b border-storm-100 px-6">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-slate-800">
              EDUSHARE
            </h1>
            <p className="mt-0.5 text-xs text-slate-500">Portal Admin</p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-600 hover:bg-storm-50 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Menu utama
          </p>

          <nav className="space-y-1.5" aria-label="Menu admin">
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
                  className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition ${
                    aktif
                      ? "bg-storm-500 text-white shadow-sm"
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
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 hover:bg-storm-50 hover:text-slate-800"
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
              className="rounded-lg p-2 text-slate-600 hover:bg-storm-50 lg:hidden"
              aria-label="Buka menu"
            >
              <Menu size={22} />
            </button>

            <div className="min-w-0">
              <p className="text-sm text-slate-500">Halaman Admin</p>
              <h2 className="truncate font-semibold text-slate-800">
                {judulHalaman}
              </h2>
            </div>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-storm-100 font-bold text-slate-700">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Admin</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1600px] p-5 sm:p-7 lg:p-9">
          {halaman[view]}

          <footer className="mt-10 border-t border-storm-100 py-5 text-center text-xs leading-5 text-slate-500">
            © 2026 EDUSHARE — Dokumentasi dan Publikasi Hasil Pelatihan Guru
            SMKN 1 Batam
          </footer>
        </main>
      </div>

     
      {showLogout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-3 text-lg font-bold text-slate-800">
              Konfirmasi Logout
            </h2>

            <p className="mb-6 text-sm leading-6 text-slate-500">
              Apakah Anda yakin ingin keluar dari akun EDUSHARE?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 rounded-lg border border-storm-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-storm-50"
              >
                Batal
              </button>

              <button
                onClick={() => {
                  setShowLogout(false);
                  onLogout?.();
                }}
                className="flex-1 rounded-lg bg-storm-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-storm-600"
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
