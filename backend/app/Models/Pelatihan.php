<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelatihan extends Model
{
    protected $table = 'pelatihan';

    protected $fillable = [
       'nama_pelatihan',
        'deskripsi',
        'tanggal_mulai',
        'tanggal_tutup_pendaftaran',
        'tanggal_selesai',
        'lokasi',
        'status',
    ];

    public function pendaftaran()
    {
        return $this->hasMany(PendaftaranPelatihan::class);
    }
}