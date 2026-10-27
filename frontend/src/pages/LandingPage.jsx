function LandingPage({ onLogin }) {
  
  const karya = [
    {
      judul: "Media Ajar Interaktif",
      kategori: "Media Pembelajaran",
      simbol: "💻",
      likes: 12,
    },
    {
      judul: "Modul Pembelajaran Digital",
      kategori: "Modul Pembelajaran",
      simbol: "📘",
      likes: 8,
    },
    {
      judul: "Kuis Interaktif",
      kategori: "Evaluasi Pembelajaran",
      simbol: "💡",
      likes: 15,
    },
  ];

  const berita = [
  {
    kategori: "Berita Pelatihan",
    judul:
      "PKM Polibatam Latih Guru SMKN 1 Batam Manfaatkan Generative AI",
    deskripsi:
      "Berita tentang pelatihan yang dilakukan Polibatam untuk guru SMKN 1 Batam.",
    simbol: "📰",
    tanggal: "3 September 2026",
    link: "https://smkn1batam.sch.id/pkm-polibatam-latih-guru-smkn-1-batam-manfaatkan-generative-ai-batam-pos/",
  },
  {
    kategori: "Agenda",
    judul: "Pelatihan dan Pengembangan Kompetensi Guru",
    deskripsi:
      "Informasi agenda pelatihan untuk mendukung peningkatan kompetensi guru.",
    simbol: "📅",
  },
];
  
const galeri = [
  { judul: "Kegiatan Pelatihan Guru", simbol: "📸" },
  { judul: "Penyampaian Materi", simbol: "🎓" },
  { judul: "Diskusi dan Praktik", simbol: "👥" },
];


  const testimoni = [
    {
      kutipan:
        "Kegiatan pelatihan memberikan wawasan dan pengalaman baru yang dapat dimanfaatkan dalam pembelajaran.",
      nama: "Peserta Pelatihan",
      peran: "Guru SMKN 1 Batam",
    },
    {
      kutipan:
        "Dokumentasi materi membantu peserta menemukan kembali informasi pelatihan dengan lebih mudah.",
      nama: "Peserta Pelatihan",
      peran: "Guru SMKN 1 Batam",
    },
  ];

  const skill = [
    {
      simbol: "🖥️",
      judul: "Media Ajar Digital",
      deskripsi:
        "Mengenal pembuatan media ajar yang menarik dan interaktif.",
    },
    {
      simbol: "📚",
      judul: "Modul Pembelajaran",
      deskripsi:
        "Mengembangkan dan mendokumentasikan modul pembelajaran.",
    },
    {
      simbol: "✨",
      judul: "Pemanfaatan Teknologi",
      deskripsi:
        "Mengeksplorasi teknologi untuk mendukung proses belajar mengajar.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#1E293B]">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#BFDBFE] bg-white/95 px-6 backdrop-blur md:px-8 lg:px-10">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a href="#beranda" className="flex shrink-0 items-center">
            <img
              src="/logo-edushare.png"
              alt="EDUSHARE"
              className="h-16 w-auto object-contain md:h-20"
            />
          </a>

          <div className="hidden items-center gap-1 text-sm lg:flex">
            <NavLink href="#beranda">
                    Beranda
                  </NavLink>
            <NavLink href="#tentang">Tentang</NavLink>
            <NavLink href="#fitur">Fitur</NavLink>
            <NavLink href="#hasil-karya">Hasil Karya</NavLink>
            <NavLink href="#berita">Berita & Agenda</NavLink>
            <NavLink href="#galeri">Galeri</NavLink>
            <NavLink href="#kontak">Kontak</NavLink>
          </div>

          <button
            type="button"
            onClick={onLogin}
            className="shrink-0 rounded-lg bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3A8A] md:px-6"
          >
            Login Guru
          </button>
        </div>
      </nav>


      {/* HERO */}
      <section
        id="beranda"
        className="scroll-mt-20 bg-gradient-to-br from-white via-[#F3F6FC] to-[#DBEAFE] px-6 py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-xs font-semibold text-[#1D4ED8]">
              <span className="h-2 w-2 rounded-full bg-[#FF8A24]" />
              SMKN 1 BATAM • PUSAT DOKUMENTASI PELATIHAN
            </div>

            <h1 className="text-4xl font-bold leading-tight text-[#1E293B] lg:text-5xl">
              Platform Digital
              <br />
              Dokumentasi &
              <br />
              <span className="text-[#2563EB]">
                Berbagi Hasil Pelatihan Guru
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              Satu wadah terintegrasi untuk mendokumentasikan materi,
              hasil karya, kegiatan, dan informasi hasil pelatihan guru
              SMKN 1 Batam secara terstruktur dan mudah diakses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onLogin}
             className="rounded-lg bg-[#1D4ED8] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#1E3A8A]"              >
                Masuk Portal →
              </button>

              <a
                href="#fitur"
                className="rounded-lg border border-[#BFDBFE] bg-white px-7 py-3.5 font-semibold text-[#2563EB] transition hover:bg-[#DBEAFE]"
              >
                Jelajahi Fitur
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#1E293B] text-xs text-white">
                  G
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#2563EB] text-xs text-white">
                  P
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#FF8A24] text-xs text-white">
                  +
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Terhubung dengan komunitas guru dan peserta pelatihan
              </p>
            </div>
          </div>

          {/* KARTU DOKUMENTASI PELATIHAN */}
          <div className="relative">
            <div className="mx-auto max-w-lg rounded-2xl border border-[#BFDBFE] bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DBEAFE] text-xl">
                    📚
                  </div>
                  <div>
                    <p className="font-bold">Pelatihan Guru</p>
                    <p className="text-xs text-gray-500">
                      Dokumentasi EDUSHARE
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-[10px] font-bold text-[#C2410C]">
                  DOKUMENTASI
                </span>
              </div>

              <div className="overflow-hidden rounded-xl bg-[#DBEAFE]">
                <img
                  src="/pelatihan-guru.jpg"
                  alt="Dokumentasi pelatihan guru SMKN 1 Batam"
                  className="h-52 w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#BFDBFE] bg-[#F3F6FC] p-4">
                  <p className="text-xs text-gray-500">Materi Pelatihan</p>
                  <p className="mt-1 text-sm font-semibold">
                    Dokumentasi Materi
                  </p>
                </div>
                <div className="rounded-xl border border-[#BFDBFE] bg-[#F3F6FC] p-4">
                  <p className="text-xs text-gray-500">Hasil Karya</p>
                  <p className="mt-1 text-sm font-semibold text-[#2563EB]">
                    Karya Guru
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-xs text-gray-500">
                  Pusat Dokumentasi Pelatihan Guru
                </p>
                <div className="h-2 w-full rounded-full bg-[#DBEAFE]">
                  <div className="h-2 w-2/3 rounded-full bg-[#2563EB]" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-0 rounded-xl border border-[#BFDBFE] bg-white px-4 py-3 shadow-lg lg:-right-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-gray-500">Platform</p>
                  <p className="font-bold">EDUSHARE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RINGKASAN */}
      <section className="bg-white px-6 py-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon="👥"
            title="Guru dan Peserta"
            description="Komunitas pelatihan"
          />
          <StatCard
            icon="📁"
            title="Materi Pelatihan"
            description="Slide, modul, dan video"
          />
          <StatCard
            icon="💡"
            title="Hasil Karya"
            description="Karya peserta pelatihan"
          />
          <StatCard
            icon="📷"
            title="Dokumentasi"
            description="Galeri kegiatan"
          />
        </div>
      </section>

      
{/* TENTANG */}
<section
  id="tentang"
  className="scroll-mt-24 bg-[#F3F6FC] px-6 py-16 lg:px-16"
>
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-3 text-sm font-semibold text-[#2563EB]">
      TENTANG EDUSHARE
    </p>

    <h2 className="text-3xl font-bold leading-tight text-[#1E293B]">
    
    </h2>

    <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
      EDUSHARE merupakan website dokumentasi dan publikasi hasil
      pelatihan guru SMKN 1 Batam. Website ini dikembangkan untuk
      membantu menyimpan dan mengelola materi serta hasil kegiatan
      pelatihan agar lebih teratur dan mudah diakses.
    </p>

    <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
      Melalui EDUSHARE, guru dapat melihat materi pelatihan,
      mengakses dokumentasi kegiatan, serta membagikan hasil karya
      yang telah dibuat selama pelatihan.
    </p>

    <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
      <div className="rounded-2xl border border-[#BFDBFE] bg-white p-6">
        <div className="mb-3 text-3xl">📁</div>
        <h3 className="text-lg font-bold text-[#1E293B]">
          Dokumentasi Terpusat
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Materi, hasil karya, dan dokumentasi pelatihan tersusun
          dalam satu website sehingga lebih mudah ditemukan.
        </p>
      </div>

      <div className="rounded-2xl border border-[#BFDBFE] bg-white p-6">
        <div className="mb-3 text-3xl">📚</div>
        <h3 className="text-lg font-bold text-[#1E293B]">
          Mudah Diakses
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Guru dapat melihat kembali materi dan hasil pelatihan
          sebagai referensi untuk kegiatan pembelajaran.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* FITUR UTAMA */}
      <section
        id="fitur"
        className="scroll-mt-20 bg-white px-6 py-20 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FITUR EDUSHARE"
            title="Fitur untuk Mendukung Pelatihan"
            description="Fitur utama EDUSHARE untuk mengakses materi, mempublikasikan karya, serta mengikuti informasi dan kegiatan pelatihan."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="📚"
              title="Materi Pelatihan"
              description="Mengakses slide, presentasi, modul, dan video pelatihan."
            />
            <FeatureCard
              icon="💡"
              title="Hasil Karya dan Like"
              description="Melihat hasil karya peserta dan memberikan apresiasi melalui fitur suka."
            />
            <FeatureCard
              icon="📝"
              title="Pendaftaran Pelatihan"
              description="Melihat informasi pelatihan dan mendaftar sebagai peserta melalui portal guru."
            />
            <FeatureCard
              icon="🏅"
              title="Sertifikat Pelatihan"
              description="Mengakses dan mengunduh sertifikat pelatihan yang telah diperoleh."
            />
            <FeatureCard
              icon="⭐"
              title="Evaluasi Kegiatan"
              description="Memberikan penilaian dan saran untuk peningkatan kualitas pelatihan."
            />
            <FeatureCard
              icon="📰"
              title="Berita dan Agenda"
              description="Mendapatkan informasi berita, kegiatan, dan agenda pelatihan."
            />
            <FeatureCard
              icon="📷"
              title="Galeri Kegiatan"
              description="Melihat dokumentasi foto kegiatan pelatihan guru."
            />
            <FeatureCard
              icon="💬"
              title="Testimoni Peserta"
              description="Membaca pengalaman dan tanggapan peserta mengenai pelatihan."
            />
            <FeatureCard
              icon="📈"
              title="Pengembangan Skill"
              description="Menjelajahi topik pembelajaran untuk mendukung peningkatan keterampilan guru."
            />
          </div>
        </div>
      </section>

      {/* HASIL KARYA */}
      <section
        id="hasil-karya"
        className="scroll-mt-20 bg-[#F3F6FC] px-6 py-20 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="PUBLIKASI KARYA"
            title="Hasil Karya Guru"
            description="Contoh kategori karya yang dapat dipublikasikan dan diapresiasi melalui EDUSHARE."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {karya.map((item) => (
              <article
                key={item.judul}
                className="overflow-hidden rounded-2xl border border-[#BFDBFE] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#DBEAFE] to-[#F3F6FC] text-5xl">
                  {item.simbol}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">
                    {item.kategori}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{item.judul}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Karya Peserta Pelatihan
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#BFDBFE] pt-4">
                    <span className="text-sm text-gray-600">
                      ♡ {item.likes} suka
                    </span>
                    <span className="rounded-lg bg-[#FFF7ED] px-3 py-1.5 text-xs font-semibold text-[#C2410C]">
                      Contoh karya
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Data karya dan jumlah suka di atas masih berupa contoh tampilan.
          </p>
        </div>
      </section>

      

{/* BERITA DAN AGENDA */}
<section
  id="berita"
  className="scroll-mt-20 bg-white px-6 py-20 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="INFORMASI TERBARU"
      title="Berita & Agenda Pelatihan"
      description="Informasi berita, kegiatan, dan agenda pelatihan guru SMKN 1 Batam."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {berita.map((item) => (
        <article
          key={item.judul}
          className="flex flex-col gap-4 rounded-2xl border border-[#BFDBFE] bg-[#F3F6FC] p-6 sm:flex-row"
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] text-3xl">
            {item.simbol}
          </div>

          <div className="flex-1">
            <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#C2410C]">
              {item.kategori}
            </span>

            <h3 className="mt-3 text-lg font-bold text-[#1E293B]">
              {item.judul}
            </h3>

            {item.tanggal && (
              <p className="mt-2 text-xs text-gray-500">
                {item.tanggal}
              </p>
            )}

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {item.deskripsi}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]"
              >
                Baca Selengkapnya
                <span>↗</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>

    <p className="mt-4 text-xs text-gray-500">
      Berita pelatihan mengarah ke sumber asli SMKN 1 Batam.
      Informasi agenda masih berupa contoh tampilan.
    </p>
  </div>
</section>


{/* GALERI KEGIATAN */}
<section
  id="galeri"
  className="scroll-mt-20 bg-[#F3F6FC] px-6 py-20 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="DOKUMENTASI KEGIATAN"
      title="Galeri Pelatihan"
      description="Dokumentasi kegiatan pelatihan dan aktivitas berbagi pengalaman guru."
    />

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {galeri.map((item, index) => (
        <article
          key={item.judul}
          className="overflow-hidden rounded-2xl border border-[#BFDBFE] bg-white"
        >
          {index === 0 ? (
            <img
              src="/pelatihan-guru.jpg"
              alt={item.judul}
              className="h-48 w-full object-cover"
            />
          ) : (
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#DBEAFE] to-[#F3F6FC] text-5xl">
              {item.simbol}
            </div>
          )}

          <div className="p-4">
            <h3 className="font-semibold text-[#1E293B]">
              {item.judul}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Dokumentasi pelatihan guru
            </p>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-4 text-xs text-gray-500">
      Foto dan simbol merupakan contoh rancangan galeri.
    </p>
  </div>
</section>

      {/* TESTIMONI */}
      <section
        id="testimoni"
        className="scroll-mt-20 bg-white px-6 py-20 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="PENGALAMAN PESERTA"
            title="Testimoni Peserta"
            description="Tanggapan peserta dapat menjadi masukan untuk kegiatan pelatihan berikutnya."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {testimoni.map((item) => (
              <article
                key={item.kutipan}
                className="rounded-2xl border border-[#BFDBFE] bg-[#F3F6FC] p-7"
              >
                <div className="text-3xl text-[#2563EB]">“</div>
                <p className="mt-2 leading-7 text-gray-600">
                  {item.kutipan}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#BFDBFE] pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBEAFE] font-bold text-[#1D4ED8]">
                    P
                  </div>
                  <div>
                    <p className="font-semibold">{item.nama}</p>
                    <p className="text-xs text-gray-500">{item.peran}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Testimoni di atas merupakan contoh teks, bukan kutipan peserta terverifikasi.
          </p>
        </div>
      </section>

      {/* PENGEMBANGAN SKILL */}
      <section
        id="pengembangan-skill"
        className="scroll-mt-20 bg-[#F3F6FC] px-6 py-20 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="BELAJAR DAN BERKEMBANG"
            title="Pengembangan Skill Guru"
            description="Topik pembelajaran yang dapat mendukung peningkatan keterampilan dan kualitas pembelajaran."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skill.map((item) => (
              <article
                key={item.judul}
                className="rounded-2xl border border-[#BFDBFE] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DBEAFE] text-2xl">
                  {item.simbol}
                </div>
                <h3 className="text-lg font-bold">{item.judul}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.deskripsi}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="kontak"
        className="scroll-mt-20 bg-[#1E293B] px-6 py-10 text-white lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold">EDUSHARE</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-[#DBEAFE]">
              Website dokumentasi dan publikasi hasil pelatihan guru
              SMKN 1 Batam.
            </p>
            <a
              href="#beranda"
              className="mt-4 inline-block text-sm font-semibold underline decoration-[#FF8A24] underline-offset-4 hover:text-[#FFB36B]"
            >
              Kembali ke atas ↑
            </a>
          </div>

          
<div className="md:text-right">
  <p className="text-sm font-semibold text-[#DBEAFE]">
    Kontak Pengelola
  </p>

  <p className="mt-3 text-sm">
    🏫 SMKN 1 Batam
  </p>

  <p className="mt-2 text-sm">
    ✉️ admin@edushare.test
  </p>

  <p className="mt-2 text-sm">
    📞 0812-3456-7890
  </p>

  <p className="mt-2 text-sm text-[#DBEAFE]">
    Senin–Jumat, 08.00–16.00 WIB
  </p>

  <p className="mt-2 text-xs text-[#DBEAFE]">
  </p>

  <p className="mt-6 text-xs text-[#DBEAFE]">
    © 2026 EDUSHARE — SMKN 1 Batam
  </p>
</div>

        </div>
      </footer>
    </div>
  );
}


function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-2 text-[#1E293B] transition hover:bg-[#F3F6FC] hover:text-[#2563EB]"
    >
      {children}
    </a>
  );
}


function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-bold tracking-widest text-[#2563EB]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-[#1E293B]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}

function StatCard({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#BFDBFE] bg-[#F3F6FC] p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] text-xl">
        {icon}
      </div>
      <div>
        <p className="font-bold text-[#1E293B]">{title}</p>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-[#BFDBFE] bg-[#F3F6FC] p-6 transition hover:-translate-y-1 hover:border-[#93C5FD] hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DBEAFE] text-xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#1E293B]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}

export default LandingPage;