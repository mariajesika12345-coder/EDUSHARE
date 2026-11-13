
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pendaftaran_pelatihans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('pelatihan_id')->constrained('pelatihan')->cascadeOnDelete();
            $table->string('nama_lengkap');
            $table->string('mata_pelajaran');
            $table->string('email');
            $table->string('status')->default('Menunggu');
            $table->timestamps();

            $table->unique(['user_id', 'pelatihan_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pendaftaran_pelatihans');
    }
};
