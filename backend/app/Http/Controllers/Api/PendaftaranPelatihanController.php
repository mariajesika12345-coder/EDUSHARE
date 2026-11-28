<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PendaftaranPelatihan;
use Illuminate\Http\Request;

class PendaftaranPelatihanController extends Controller
{
    // GURU MENDAFTAR PELATIHAN
    public function store(Request $request)
    {
        abort_unless(
            $request->user()->role === 'guru',
            403,
            'Hanya guru yang dapat mendaftar.'
        );

        $validated = $request->validate([
            'pelatihan_id' => 'required|exists:pelatihan,id',
            'nama_lengkap' => 'required|string|max:255',
            'nomor_whatsapp' => 'required|string|max:20',
        ]);

        $user = $request->user();

        $sudahMendaftar = PendaftaranPelatihan::where('user_id', $user->id)
            ->where('pelatihan_id', $validated['pelatihan_id'])
            ->exists();

        if ($sudahMendaftar) {
            return response()->json([
                'message' => 'Kamu sudah terdaftar pada pelatihan ini.',
            ], 422);
        }

        $pendaftaran = PendaftaranPelatihan::create([
            'user_id' => $user->id,
            'pelatihan_id' => $validated['pelatihan_id'],
            'nama_lengkap' => $validated['nama_lengkap'],
            'nomor_whatsapp' => $validated['nomor_whatsapp'],
            'email' => $user->email,
            'status' => 'Terdaftar',
        ]);

        return response()->json([
            'message' => 'Pendaftaran pelatihan berhasil!',
            'data' => $pendaftaran,
        ], 201);
    }

    // ADMIN MELIHAT DAFTAR PESERTA
    public function index(Request $request)
    {
        abort_unless(
            $request->user()->role === 'admin',
            403,
            'Akses hanya untuk admin.'
        );

        $pendaftaran = PendaftaranPelatihan::with(['user', 'pelatihan'])
            ->latest()
            ->get();

        return response()->json([
            'message' => 'Daftar peserta pelatihan berhasil diambil.',
            'data' => $pendaftaran,
        ]);
    }

    // ADMIN MENGUBAH STATUS PENDAFTARAN
    public function updateStatus(Request $request, $id)
    {
        abort_unless(
            $request->user()->role === 'admin',
            403,
            'Akses hanya untuk admin.'
        );

        $validated = $request->validate([
            'status' => 'required|in:Terdaftar,Selesai,Dibatalkan',
        ]);

        $pendaftaran = PendaftaranPelatihan::findOrFail($id);

        $pendaftaran->update([
            'status' => $validated['status'],
        ]);

        return response()->json([
            'message' => 'Status pendaftaran berhasil diperbarui.',
            'data' => $pendaftaran,
        ]);
    }

    // ADMIN MENGHAPUS PENDAFTARAN
    public function destroy(Request $request, $id)
    {
        abort_unless(
            $request->user()->role === 'admin',
            403,
            'Akses hanya untuk admin.'
        );

        $pendaftaran = PendaftaranPelatihan::findOrFail($id);
        $pendaftaran->delete();

        return response()->json([
            'message' => 'Pendaftaran pelatihan berhasil dihapus.',
        ], 200);
    }
}
