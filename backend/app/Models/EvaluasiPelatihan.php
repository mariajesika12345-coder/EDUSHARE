<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EvaluasiPelatihan extends Model
{
    protected $table = 'evaluasi_pelatihans';

    protected $fillable = [
        'user_id',
        'pelatihan_id',
        'nama_lengkap',
        'usia',
        'penilaian_1',
        'penilaian_2',
        'penilaian_3',
        'penilaian_4',
        'penilaian_5',
        'penilaian_6',
        'penilaian_7',
        'penilaian_8',
        'penilaian_9',
        'penilaian_10',
        'penilaian_11',
        'penilaian_12',
        'penilaian_13',
        'materi_menarik',
        'komentar',
        'pelatihan_selanjutnya',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function pelatihan(): BelongsTo
    {
        return $this->belongsTo(Pelatihan::class);
    }
}
