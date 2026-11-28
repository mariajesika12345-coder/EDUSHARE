<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pendaftaran_pelatihans', function (Blueprint $table) {
            $table->dropColumn('mata_pelajaran');
        });

        Schema::table('pendaftaran_pelatihans', function (Blueprint $table) {
            $table->string('nomor_whatsapp', 20)->after('nama_lengkap');
        });
    }

    public function down(): void
    {
        Schema::table('pendaftaran_pelatihans', function (Blueprint $table) {
            $table->dropColumn('nomor_whatsapp');
        });

        Schema::table('pendaftaran_pelatihans', function (Blueprint $table) {
            $table->string('mata_pelajaran')->nullable();
        });
    }
};