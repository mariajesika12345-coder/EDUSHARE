<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Materi;
use Illuminate\Http\Request;

class MateriController extends Controller
{
    public function index()
    {
        $materi = Materi::latest()->get();

        return response()->json([
            'message' => 'Data materi berhasil diambil.',
            'data' => $materi,
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'nama_file' => 'required|string|max:255',
            'tipe' => 'required|string|max:100',
            'kategori' => 'nullable|string|max:255',
            'file_path' => 'required|string|max:255',
        ]);

        $materi = Materi::create($validated);

        return response()->json([
            'message' => 'Materi berhasil ditambahkan.',
            'data' => $materi,
        ], 201);
    }

    public function destroy($id)
    {
        $materi = Materi::findOrFail($id);
        $materi->delete();

        return response()->json([
            'message' => 'Materi berhasil dihapus.',
        ], 200);
    }
}
