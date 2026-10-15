<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = (string) env('GEJA_ADMIN_EMAIL', '');
        $password = (string) env('GEJA_ADMIN_PASSWORD', '');

        if (app()->environment('local', 'testing') && ($email === '' || $email === 'seu-email@example.com')) {
            $email = 'admin@geja.local';
            $password = 'geja-labs-2026';
        }

        if ($email === '' || $password === '') {
            return;
        }

        User::updateOrCreate(
            ['email' => $email],
            [
                'name' => env('GEJA_ADMIN_NAME', 'Geja Labs Admin'),
                'password' => Hash::make($password),
            ],
        );
    }
}
