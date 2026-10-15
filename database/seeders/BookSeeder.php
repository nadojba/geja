<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            ['A Startup Enxuta', 'Eric Ries', 2011, 'NEGÓCIOS', 'capas/startup-enxuta.jpg', ['#553120', '#1d1c23'], 'Eric Ries propõe tratar a criação de um produto como uma série de experimentos. Em vez de planejar por meses, a equipe lança rápido uma versão mínima, mede como as pessoas reagem e usa o que aprendeu para decidir o próximo passo.', ['Produto mínimo viável (MVP) para validar hipóteses', 'Ciclo construir, medir, aprender', 'Pivotar ou perseverar com base em dados', 'Métricas que mostram aprendizado, não vaidade']],
            ['Rápido e Devagar', 'Daniel Kahneman', 2011, 'PSICOLOGIA', 'capas/rapido-e-devagar.jpg', ['#323044', '#1a1923'], 'O psicólogo Daniel Kahneman descreve dois modos de pensar: o Sistema 1, rápido e intuitivo, e o Sistema 2, lento e analítico. O livro mostra como atalhos mentais levam a erros previsíveis de julgamento e decisão.', ['Sistema 1 (rápido) e Sistema 2 (devagar)', 'Heurísticas e vieses cognitivos', 'Aversão à perda e ancoragem', 'Excesso de confiança nas próprias previsões']],
            ['Como Fazer Amigos e Influenciar Pessoas', 'Dale Carnegie', 1936, 'RELACIONAMENTOS', 'capas/como-fazer-amigos.jpg', ['#493026', '#201512'], 'Clássico sobre relacionamento humano. Carnegie reúne princípios práticos: demonstrar interesse genuíno pelos outros, ouvir com atenção, evitar criticar e fazer a outra pessoa se sentir valorizada.', ['Interesse genuíno pelas pessoas', 'Ouvir mais do que falar', 'Evitar críticas e discussões inúteis', 'Lembrar e usar o nome da pessoa']],
            ['Código Limpo', 'Robert C. Martin', 2008, 'ENGENHARIA', 'capas/codigo-limpo.jpg', ['#373e2a', '#161a10'], 'Robert C. Martin defende que código é escrito para ser lido por pessoas. O livro mostra como nomear bem, manter funções pequenas, tratar erros e escrever testes para que o software continue fácil de mudar.', ['Nomes que revelam intenção', 'Funções pequenas, com uma responsabilidade', 'Testes como rede de segurança', 'Refatoração contínua']],
            ['Hábitos Atômicos', 'James Clear', 2018, 'PRODUTIVIDADE', 'capas/habitos-atomicos.jpg', ['#292127', '#121015'], 'James Clear mostra que mudanças pequenas e consistentes geram grandes resultados com o tempo. O foco está em construir sistemas e identidade, e não apenas em perseguir metas.', ['Melhorar 1% ao dia', 'Sistemas valem mais que metas', 'Hábito óbvio, atraente, fácil e satisfatório', 'Mudança de identidade']],
        ];

        foreach ($books as $order => [$title, $author, $year, $tag, $image, $colors, $summary, $ideas]) {
            Book::updateOrCreate(['title' => $title], compact('author', 'year', 'tag', 'image', 'colors', 'summary', 'ideas') + [
                'sort_order' => $order,
                'is_published' => true,
            ]);
        }
    }
}
