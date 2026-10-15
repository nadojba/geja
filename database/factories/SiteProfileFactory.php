<?php

namespace Database\Factories;

use App\Models\SiteProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SiteProfile>
 */
class SiteProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'hero_eyebrow' => 'DESENVOLVEDOR PHP · UNOESC',
            'hero_title' => 'Ideias testadas em',
            'hero_title_emphasis' => 'código real.',
            'hero_lead' => 'Experimentos, projetos e leituras de Leonardo Geja.',
            'about_name' => 'Leonardo Geja',
            'about_title' => 'o cara por trás do laboratório.',
            'about_lead' => 'Desenvolvedor curioso, com experiência em produção e vontade constante de aprender.',
            'about_photo_url' => null,
            'about_steps' => [['title' => 'Geja é o apelido que ficou', 'description' => 'Aqui eu reúno projetos pessoais e experimentos.', 'image' => null]],
            'stack' => ['PHP', 'JavaScript', 'MySQL', 'Git', 'Linux'],
            'contact_text' => 'GitHub · LinkedIn · seu@email.com',
            'github_url' => 'https://github.com/',
            'linkedin_url' => null,
            'contact_email' => null,
            'manifesto_eyebrow' => 'CURIOSIDADE COMO MÉTODO',
            'manifesto_title' => 'A stack muda.',
            'manifesto_title_emphasis' => 'A vontade de construir fica.',
            'manifesto_description' => 'Linguagens e frameworks vêm e vão.',
        ];
    }
}
