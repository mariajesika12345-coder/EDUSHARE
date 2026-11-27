<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pelatihan;
use Illuminate\Http\Request;

class PelatihanController extends Controller
{
    // MENAMPILKAN SEMUA DATA PELATIHAN
    public function index()
    {
        return response()->json([
            'message' => 'Data pelatihan berhasil diambil.',
            'data' => Pelatihan::latest()->get(),
        ]);
    }

    // MENAMBAHKAN DATA PELATIHAN
    public function store(Request $request)
    {
        abort_unless($request->user()->role === 'admin', 403, 'Akses hanya untuk admin.');

        $validated = $request->validate([
            'nama_pelatihan' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'tanggal_mulai' => 'nullable|date',
'tanggal_tutup_pendaftaran' => 'nullable|date',
'tanggal_selesai' => 'nullable|date|after_or_equal:tanggal_mulai',
            'lokasi' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:255',
        ]);

        $pelatihan = Pelatihan::create($validated);

        return response()->json([
            'message' => 'Pelatihan berhasil ditambahkan.',
            'data' => $pelatihan,
        ], 201);
    }

    // MENGUBAH DATA PELATIHAN
    public function update(Request $request, $id)
    {
        abort_unless($request->user()->role === 'admin', 403, 'Akses hanya untuk admin.');

        $validated = $request->validate([
            'nama_pelatihan' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'tanggal_mulai' => 'nullable|date',
            'tanggal_tutup_pendaftaran' => 'nullable|date',
            'tanggal_selesai' => 'nullable|date|after_or_equal:tanggal_mulai',
            'lokasi' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:255',
        ]);

        $pelatihan = Pelatihan::findOrFail($id);
        $pelatihan->update($validated);

        return response()->json([
            'message' => 'Pelatihan berhasil diperbarui.',
            'data' => $pelatihan,
        ]);
    }

    // MENGHAPUS DATA PELATIHAN
    public function destroy(Request $request, $id)
    {
        abort_unless($request->user()->role === 'admin', 403, 'Akses hanya untuk admin.');

        $pelatihan = Pelatihan::findOrFail($id);
        $pelatihan->delete();

        return response()->json([
            'message' => 'Pelatihan berhasil dihapus.',
        ]);
    }
}
