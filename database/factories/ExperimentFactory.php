<?php

namespace Database\Factories;

use App\Models\Experiment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Experiment>
 */
class ExperimentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->unique()->slug(2),
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'label' => 'LABORATÓRIO',
            'status' => 'Em construção',
            'icon' => '{}',
            'kicker' => fake()->sentence(4),
            'problem' => fake()->paragraph(),
            'approach' => fake()->paragraph(),
            'outcome' => fake()->paragraph(),
            'accent_primary' => '#ff8739',
            'accent_secondary' => '#c8ff00',
            'stack' => ['PHP', 'SQLite'],
            'phases' => [['title' => 'Testar', 'description' => fake()->sentence()]],
            'learnings' => [fake()->sentence()],
            'github_url' => null,
            'demo_url' => null,
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
