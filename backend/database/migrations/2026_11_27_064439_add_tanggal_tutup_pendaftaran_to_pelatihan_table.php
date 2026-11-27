<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pelatihan', function (Blueprint $table) {
            $table->date('tanggal_tutup_pendaftaran')
                  ->nullable()
                  ->after('tanggal_mulai');
        });
    }

    public function down(): void
    {
        Schema::table('pelatihan', function (Blueprint $table) {
            $table->dropColumn('tanggal_tutup_pendaftaran');
        });
    }
};