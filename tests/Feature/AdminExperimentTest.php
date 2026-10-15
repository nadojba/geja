<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('an authenticated administrator can create an experiment', function () {
    $user = User::factory()->create([
        'password' => Hash::make('secret-password'),
    ]);

    $response = $this->actingAs($user)->post(route('admin.experiments.store'), [
        'title' => 'Novo experimento',
        'slug' => 'novo-experimento',
        'description' => 'Uma experiência criada pelo painel.',
        'label' => 'LABORATÓRIO',
        'status' => 'Em construção',
        'icon' => '{}',
        'kicker' => 'Uma nova pergunta',
        'problem' => 'Existe uma pergunta para investigar.',
        'approach' => 'Vamos construir um pequeno teste.',
        'outcome' => 'Um aprendizado documentado.',
        'accent_primary' => '#ff8739',
        'accent_secondary' => '#c8ff00',
        'stack' => ['PHP', 'SQLite'],
        'phases' => [
            ['title' => 'Testar', 'description' => 'Executar o primeiro ciclo.'],
        ],
        'learnings' => ['Medir antes de expandir.'],
        'github_url' => 'https://github.com/example/project',
        'demo_url' => 'https://example.com/demo',
        'sort_order' => 10,
        'is_published' => true,
    ]);

    $response->assertRedirect(route('admin.experiments.index'));
    $this->assertDatabaseHas('experiments', [
        'slug' => 'novo-experimento',
        'title' => 'Novo experimento',
        'is_published' => true,
    ]);
});
