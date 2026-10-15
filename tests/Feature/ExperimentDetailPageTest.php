<?php

use App\Models\Experiment;

test('renders an experiment detail page for a known slug', function () {
    Experiment::factory()->create([
        'slug' => 'mini-framework-php',
    ]);

    $response = $this->get(route('experiments.show', 'mini-framework-php'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('ExperimentDetail')
        ->where('experiment.slug', 'mini-framework-php')
    );
});

test('returns not found for an unknown experiment slug', function () {
    $this->get('/experimentos/nao-existe')->assertNotFound();
});
