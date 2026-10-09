function LandingPage({ onLogin }) {
  return (
    <div className="min-h-screen bg-[#F8FBFE] text-[#394959]">

      {/* ================= NAVBAR ================= */}
      <nav className="h-20 bg-white border-b border-[#BDDDFC] flex items-center justify-between px-12 lg:px-16">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-edushare.png"
            alt="EDUSHARE"
            className="h-20 w-auto object-contain -translate-y-2"
          />
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <a
            href="#beranda"
            className="px-4 py-2 rounded-lg bg-[#BDDDFC] text-[#394959] font-semibold"
          >
            Beranda
          </a>

          <a href="#tentang" className="hover:text-[#6A89A7]">
            Tentang
          </a>

          <a href="#fitur" className="hover:text-[#6A89A7]">
            Fitur
          </a>

          <a href="#hasil-karya" className="hover:text-[#6A89A7]">
            Hasil Karya
          </a>

          <a href="#berita" className="hover:text-[#6A89A7]">
            Berita & Agenda
          </a>

          <a href="#kontak" className="hover:text-[#6A89A7]">
            Kontak
          </a>
        </div>

        {/* Login */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="hidden sm:block text-sm font-semibold text-[#394959] hover:text-[#6A89A7]"
          >
          
          </button>

          <button
            onClick={onLogin}
            className="px-5 py-2.5 rounded-lg bg-[#6A89A7] text-white text-sm font-semibold shadow-sm hover:bg-[#394959] transition"
          >
            Login Guru
          </button>

          <div className="w-9 h-9 rounded-full bg-[#BDDDFC] flex items-center justify-center text-[#394959]">
            👤
          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="beranda"
        className="px-12 lg:px-16 py-20 bg-gradient-to-br from-[#F8FBFE] via-[#F8FBFE] to-[#BDDDFC]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BDDDFC] text-[#394959] text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6A89A7]"></span>
              SMKN 1 BATAM • PUSAT DOKUMENTASI PELATIHAN
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#394959]">
              Platform Digital
              <br />
              Dokumentasi &
              <br />
              <span className="text-[#6A89A7]">
                Berbagi Hasil Pelatihan Guru
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              Satu wadah terintegrasi untuk mendokumentasikan materi,
              hasil karya, kegiatan, dan informasi hasil pelatihan guru
              SMKN 1 Batam secara terstruktur dan mudah diakses.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={onLogin}
                className="px-7 py-3.5 rounded-lg bg-[#6A89A7] text-white font-semibold shadow-md hover:bg-[#394959] transition"
              >
                Masuk Portal →
              </button>

              <a
                href="#fitur"
                className="px-7 py-3.5 rounded-lg bg-white border border-[#BDDDFC] text-[#394959] font-semibold hover:bg-[#BDDDFC] transition"
              >
                Jelajahi Materi
              </a>

            </div>

            {/* Small information */}
            <div className="flex items-center gap-3 mt-8">

              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#394959] border-2 border-white flex items-center justify-center text-xs text-white">
                  G
                </div>

                <div className="w-9 h-9 rounded-full bg-[#6A89A7] border-2 border-white flex items-center justify-center text-xs text-white">
                  P
                </div>

                <div className="w-9 h-9 rounded-full bg-[#88BDF2] border-2 border-white flex items-center justify-center text-xs text-[#394959]">
                  +
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Terhubung dengan komunitas guru dan peserta pelatihan
              </p>

            </div>

          </div>


          {/* RIGHT - VISUAL CARD */}
          <div className="relative">

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-[#BDDDFC] p-5 max-w-lg mx-auto">

              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#BDDDFC] flex items-center justify-center">
                    📚
                  </div>

                  <div>
                    <p className="font-bold text-[#394959]">
                      Pelatihan Guru
                    </p>
                    <p className="text-xs text-gray-500">
                      Dokumentasi EDUSHARE
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#BDDDFC] text-[#394959] text-[10px] font-bold">
                  AKTIF
                </span>

              </div>


              {/* Image Placeholder */}
              <div className="h-52 rounded-xl bg-gradient-to-br from-[#6A89A7] to-[#88BDF2] flex items-center justify-center overflow-hidden">

                <div className="text-center text-white">
                  <div className="text-6xl mb-3">
                    🎓
                  </div>

                  <p className="text-lg font-bold">
                    Pelatihan Guru
                  </p>

                  <p className="text-sm opacity-90">
                    SMKN 1 Batam
                  </p>
                </div>

              </div>


              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3 mt-4">

                <div className="rounded-xl bg-[#F8FBFE] border border-[#BDDDFC] p-4">
                  <p className="text-xs text-gray-500">
                    Materi Tersedia
                  </p>

                  <p className="text-2xl font-bold text-[#394959]">
                    
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8FBFE] border border-[#BDDDFC] p-4">
                  <p className="text-xs text-gray-500">
                    Hasil Karya
                  </p>

                  <p className="text-2xl font-bold text-[#6A89A7]">
                    
                  </p>
                </div>

              </div>


              {/* Progress */}
              <div className="mt-5">

                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-500">
                    Dokumentasi Pelatihan
                  </span>

                  <span className="font-bold text-[#6A89A7]">
                    
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-[#BDDDFC]">
                  <div className="h-2 w-[92%] rounded-full bg-[#6A89A7]"></div>
                </div>

              </div>

            </div>


            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-lg border border-[#BDDDFC] px-5 py-3">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#BDDDFC] flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Guru Terhubung
                  </p>

                  <p className="font-bold text-[#394959]">
                    148+ Peserta
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATISTICS ================= */}
      <section className="px-12 lg:px-16 py-8 bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">

          <StatCard
            icon="👥"
            number="148+"
            title="Pendidik Aktif"
          />

          <StatCard
            icon="📁"
            number="320+"
            title="Materi & Dokumen"
          />

          <StatCard
            icon="💡"
            number="85+"
            title="Hasil Karya"
          />

          <StatCard
            icon="✓"
            number="98%"
            title="Dokumentasi Tersedia"
          />

        </div>

      </section>


      {/* ================= FITUR ================= */}
      <section
        id="fitur"
        className="px-12 lg:px-16 py-20 bg-[#F8FBFE]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-10">

            <div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#6A89A7] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#6A89A7]"></span>
                EKOSISTEM EDUSHARE
              </div>

              <h2 className="text-3xl font-bold text-[#394959]">
                Dokumentasi Pelatihan
                <br />
                Guru yang Terstruktur
              </h2>

              <p className="mt-3 text-sm text-gray-600 max-w-xl">
                Semua hasil pelatihan dapat disimpan, dikelola,
                dan dibagikan dalam satu platform yang mudah diakses.
              </p>

            </div>

            <a
              href="#fitur"
              className="hidden md:block text-sm font-semibold text-[#6A89A7]"
            >
              Lihat Semua Fitur →
            </a>

          </div>


          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            <FeatureCard
              icon="📚"
              title="Materi Pelatihan"
              description="Mengakses slide, modul, dan berbagai materi yang digunakan dalam kegiatan pelatihan."
            />

            <FeatureCard
              icon="💡"
              title="Hasil Karya Guru"
              description="Mempublikasikan dan melihat berbagai hasil karya yang dibuat oleh peserta pelatihan."
            />

            <FeatureCard
              icon="📷"
              title="Dokumentasi Kegiatan"
              description="Menyimpan dokumentasi kegiatan pelatihan secara terstruktur dan mudah ditemukan."
            />

          </div>

        </div>

      </section>


      {/* ================= TENTANG ================= */}
      <section
        id="tentang"
        className="px-12 lg:px-16 py-20 bg-white"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-semibold text-[#6A89A7] mb-3">
            TENTANG EDUSHARE
          </p>

          <h2 className="text-3xl font-bold text-[#394959]">
            Edukasi, Dokumentasi, dan Sharing
          </h2>

          <p className="mt-5 text-gray-600 leading-7 max-w-3xl mx-auto">
            EDUSHARE hadir sebagai wadah digital untuk mendukung
            dokumentasi dan publikasi hasil pelatihan guru SMKN 1 Batam.
            Platform ini membantu mengorganisasi materi, hasil karya,
            dokumentasi kegiatan, dan informasi pelatihan agar lebih
            mudah diakses dan dimanfaatkan kembali.
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer
        id="kontak"
        className="px-12 lg:px-16 py-8 bg-[#394959] text-white"
      >

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">

          <div>
            <h3 className="text-xl font-bold">
              EDUSHARE
            </h3>

            <p className="text-sm text-[#BDDDFC] mt-1">
              Edukasi, Dokumentasi, dan Sharing
            </p>
          </div>

          <p className="text-sm text-[#BDDDFC]">
            © 2026 EDUSHARE — SMKN 1 Batam
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function StatCard({ icon, number, title }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-xl bg-[#F8FBFE] border border-[#BDDDFC]">

      <div className="w-12 h-12 rounded-xl bg-[#BDDDFC] flex items-center justify-center text-xl">
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold text-[#394959]">
          {number}
        </p>

        <p className="text-xs text-gray-500">
          {title}
        </p>
      </div>

    </div>
  );
}


function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-7 rounded-2xl bg-white border border-[#BDDDFC] shadow-sm hover:shadow-md transition">

      <div className="w-12 h-12 rounded-xl bg-[#BDDDFC] flex items-center justify-center text-xl mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#394959]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>

    </div>
  );
}


export default LandingPage;