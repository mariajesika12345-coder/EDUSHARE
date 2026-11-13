
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PendaftaranPelatihanController;

// API REGISTER
Route::post('/register', [AuthController::class, 'register']);

// API LOGIN
Route::post('/login', [AuthController::class, 'login']);

// API LOGOUT
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// API TEST
Route::get('/test', function () {
    return response()->json([
        'message' => 'Backend Laravel berhasil terhubung!'
    ]);
    });

    // API PENDAFTARAN PELATIHAN

Route::middleware('auth:sanctum')->group(function () {

    // Guru mendaftar pelatihan
    Route::post('/pendaftaran-pelatihan', [PendaftaranPelatihanController::class, 'store']);

    // Admin melihat daftar peserta
    Route::get('/pendaftaran-pelatihan', [PendaftaranPelatihanController::class, 'index']);

    // Admin mengubah status pendaftaran
    Route::put('/pendaftaran-pelatihan/{id}/status', [PendaftaranPelatihanController::class, 'updateStatus']);

});