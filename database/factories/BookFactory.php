<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'author' => fake()->name(),
            'year' => fake()->numberBetween(1900, 2025),
            'tag' => 'ENGENHARIA',
            'image' => null,
            'colors' => ['#553120', '#1d1c23'],
            'summary' => fake()->paragraph(),
            'ideas' => [fake()->sentence()],
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
