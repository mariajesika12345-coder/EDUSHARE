<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EvaluasiPelatihan;
use Illuminate\Http\Request;

class EvaluasiPelatihanController extends Controller
{
    // GURU MENGIRIM EVALUASI
    public function store(Request $request)
    {
        abort_unless($request->user()->role === 'guru', 403, 'Akses hanya untuk Guru.');

        $validated = $request->validate([
            'pelatihan_id' => 'required|exists:pelatihan,id',
            'nama_lengkap' => 'required|string|max:255',
            'usia' => 'required|integer|min:1|max:120',

            'penilaian_1' => 'required|integer|between:1,5',
            'penilaian_2' => 'required|integer|between:1,5',
            'penilaian_3' => 'required|integer|between:1,5',
            'penilaian_4' => 'required|integer|between:1,5',
            'penilaian_5' => 'required|integer|between:1,5',
            'penilaian_6' => 'required|integer|between:1,5',
            'penilaian_7' => 'required|integer|between:1,5',
            'penilaian_8' => 'required|integer|between:1,5',
            'penilaian_9' => 'required|integer|between:1,5',
            'penilaian_10' => 'required|integer|between:1,5',
            'penilaian_11' => 'required|integer|between:1,5',
            'penilaian_12' => 'required|integer|between:1,5',
            'penilaian_13' => 'required|integer|between:1,5',

            'materi_menarik' => 'nullable|string',
            'komentar' => 'nullable|string',
            'pelatihan_selanjutnya' => 'nullable|string',
        ]);

        $evaluasi = EvaluasiPelatihan::create([
            ...$validated,
            'user_id' => $request->user()->id,
        ]);

        return response()->json([
            'message' => 'Evaluasi pelatihan berhasil dikirim.',
            'data' => $evaluasi,
        ], 201);
    }

    // ADMIN MELIHAT SEMUA EVALUASI
    public function index(Request $request)
    {
        abort_unless($request->user()->role === 'admin', 403, 'Akses hanya untuk Admin.');

        $evaluasi = EvaluasiPelatihan::with(['user', 'pelatihan'])
            ->latest()
            ->get();

        return response()->json([
            'message' => 'Data evaluasi berhasil diambil.',
            'data' => $evaluasi,
        ]);
    }

    // ADMIN MELIHAT DETAIL EVALUASI
    public function show(Request $request, $id)
    {
        abort_unless($request->user()->role === 'admin', 403, 'Akses hanya untuk Admin.');

        $evaluasi = EvaluasiPelatihan::with(['user', 'pelatihan'])
            ->findOrFail($id);

        return response()->json([
            'message' => 'Detail evaluasi berhasil diambil.',
            'data' => $evaluasi,
        ]);
    }
}
