<?php

use App\Models\Experiment;

test('renders the Geja Labs Inertia page', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('GejaLabs')
    );
});

test('shares only published experiments with the public page', function () {
    Experiment::factory()->create([
        'slug' => 'public-experiment',
        'is_published' => true,
    ]);
    Experiment::factory()->create([
        'slug' => 'draft-experiment',
        'is_published' => false,
    ]);

    $response = $this->get(route('home'));

    $response->assertInertia(fn ($page) => $page
        ->where('experiments.0.slug', 'public-experiment')
        ->missing('experiments.1')
    );
});
