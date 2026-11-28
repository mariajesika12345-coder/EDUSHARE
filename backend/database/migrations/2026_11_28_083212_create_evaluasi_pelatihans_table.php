
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('evaluasi_pelatihans', function (Blueprint $table) {
            $table->id();

            // Identitas peserta
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('pelatihan_id')->constrained('pelatihan')->cascadeOnDelete();
            $table->string('nama_lengkap');
            $table->unsignedInteger('usia');

            // Penilaian 13 pertanyaan (skala 1–5)
            for ($i = 1; $i <= 13; $i++) {
                $table->unsignedTinyInteger('penilaian_' . $i);
            }

            // Jawaban uraian
            $table->text('materi_menarik')->nullable();
            $table->text('komentar')->nullable();
            $table->text('pelatihan_selanjutnya')->nullable();

            $table->timestamps();

            // Satu guru hanya mengisi satu evaluasi untuk setiap pelatihan
            $table->unique(['user_id', 'pelatihan_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('evaluasi_pelatihans');
    }
};
