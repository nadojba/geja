<?php

namespace Database\Seeders;

use App\Models\SiteProfile;
use Illuminate\Database\Seeder;

class SiteProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteProfile::query()->updateOrCreate(['id' => 1], [
            'hero_eyebrow' => 'DESENVOLVEDOR PHP · UNOESC',
            'hero_title' => 'Ideias testadas em',
            'hero_title_emphasis' => 'código real.',
            'hero_lead' => 'Experimentos, projetos e leituras de Leonardo Geja.',
            'about_name' => 'Leonardo Geja',
            'about_title' => 'o cara por trás do laboratório.',
            'about_lead' => 'Desenvolvedor curioso, com experiência em produção e vontade constante de aprender.',
            'about_photo_url' => null,
            'about_steps' => [
                ['title' => 'Geja é o apelido que ficou', 'description' => 'Aqui eu reúno projetos pessoais e experimentos: tudo o que construo para aprender e testar ideias.', 'image' => null],
                ['title' => '36 anos e muita coisa para aprender', 'description' => 'Tecnologia, leitura e projetos paralelos se alimentam. O que aprendo em um livro costuma virar um experimento.', 'image' => null],
                ['title' => 'Mais de 5 anos de experiência, hoje na Unoesc', 'description' => 'Sistemas em produção, manutenção e evolução no dia a dia. Experiência que vem de resolver problemas reais.', 'image' => null],
                ['title' => 'PHP é a minha linguagem principal', 'description' => 'Moderno, maduro e produtivo. O laboratório aceita qualquer linguagem que valha o experimento.', 'image' => null],
            ],
            'stack' => ['PHP', 'JavaScript', 'MySQL', 'Git', 'Linux'],
            'contact_text' => 'GitHub · LinkedIn · seu@email.com',
            'github_url' => 'https://github.com/',
            'linkedin_url' => null,
            'contact_email' => null,
            'manifesto_eyebrow' => 'CURIOSIDADE COMO MÉTODO',
            'manifesto_title' => 'A stack muda.',
            'manifesto_title_emphasis' => 'A vontade de construir fica.',
            'manifesto_description' => 'Linguagens e frameworks vêm e vão. O hábito de testar, medir e melhorar é o que sustenta cada experimento.',
        ]);
    }
}
