<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('guests are redirected to the admin login page', function () {
    $this->get('/admin')->assertRedirect(route('admin.login'));
});

test('an administrator can log in without a registration flow', function () {
    $user = User::factory()->create([
        'email' => 'admin@example.com',
        'password' => Hash::make('secret-password'),
    ]);

    $response = $this->post(route('admin.login.store'), [
        'email' => $user->email,
        'password' => 'secret-password',
        'remember' => true,
    ]);

    $response->assertRedirect(route('admin.dashboard'));
    $this->assertAuthenticatedAs($user);
});
