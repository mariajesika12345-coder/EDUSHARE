<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    protected $table = 'materis';

    protected $fillable = [
        'judul',
        'nama_file',
        'tipe',
        'kategori',
        'file_path',
    ];
}
