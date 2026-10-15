<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExperimentController as AdminExperimentController;
use App\Http\Controllers\Admin\SiteProfileController;
use App\Http\Controllers\ExperimentController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/experimentos/{slug}', [ExperimentController::class, 'show'])
    ->name('experiments.show');

Route::middleware('guest')->prefix('admin')->group(function (): void {
    Route::get('/login', [AuthController::class, 'create'])->name('admin.login');
    Route::post('/login', [AuthController::class, 'store'])->name('admin.login.store');
});

Route::middleware('auth')->prefix('admin')->group(function (): void {
    Route::get('/', DashboardController::class)->name('admin.dashboard');
    Route::post('/logout', [AuthController::class, 'destroy'])->name('admin.logout');
    Route::resource('experimentos', AdminExperimentController::class)
        ->parameters(['experimentos' => 'experiment'])
        ->names('admin.experiments')
        ->except(['show']);
    Route::resource('livros', BookController::class)
        ->parameters(['livros' => 'book'])
        ->names('admin.books');
    Route::get('/perfil', [SiteProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::put('/perfil/{siteProfile}', [SiteProfileController::class, 'update'])->name('admin.profile.update');
});
