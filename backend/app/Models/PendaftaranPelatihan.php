<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PendaftaranPelatihan extends Model
{
    protected $table = 'pendaftaran_pelatihans';

    protected $fillable = [
        'user_id',
        'pelatihan_id',
        'nama_lengkap',
        'mata_pelajaran',
        'email',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pelatihan()
    {
        return $this->belongsTo(Pelatihan::class);
    }
}