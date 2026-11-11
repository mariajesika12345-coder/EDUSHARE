
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

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
