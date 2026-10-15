<?php

namespace Database\Seeders;

use App\Models\Experiment;
use Illuminate\Database\Seeder;

class ExperimentSeeder extends Seeder
{
    public function run(): void
    {
        $experiments = [
            ['laboratorio', 'Um espaço para tirar ideias do papel.', 'Cada experimento nasce de uma curiosidade, vira código e termina com um aprendizado registrado.', 'O LABORATÓRIO', 'O laboratório', '↗', 'A origem de tudo', '#ff8739', '#c8ff00', ['Curiosidade', 'Código', 'Medição', 'Aprendizado']],
            ['mini-framework-php', 'Mini framework PHP', 'Roteador e container de dependências feitos do zero, para entender o que os grandes frameworks fazem por baixo.', 'PHP 8 · PSR-4 · COMPOSER · NO AR', 'No ar', '{}', 'Infraestrutura por baixo do framework', '#c8ff00', '#373e2a', ['PHP 8', 'PSR-4', 'Composer', 'HTTP', 'Testes']],
            ['bot-de-monitoramento', 'Bot de monitoramento', 'Um bot no Telegram que avisa quando algo sai do esperado: servidor fora do ar ou rotina que falhou.', 'PHP · TELEGRAM API · CRON · EM CONSTRUÇÃO', 'Em construção', '>_', 'Alertas antes do problema crescer', '#ff8739', '#323044', ['PHP', 'Telegram API', 'Cron', 'Webhooks', 'Logs']],
            ['painel-de-metricas', 'Painel de métricas', 'Dashboard pessoal para acompanhar commits, horas de estudo e leituras ao longo do ano.', 'JAVASCRIPT · CANVAS · SQLITE · NO AR', 'No ar', '%', 'Tornar o progresso visível', '#ff8739', '#493026', ['JavaScript', 'Canvas', 'SQLite', 'Dados', 'Visualização']],
            ['o-que-nao-deu-certo', 'O que não deu certo', 'Nem todo experimento vinga. Este fica registrado pelo que ensinou sobre arquitetura e escopo.', 'ARQUITETURA · GIT · ARQUIVADO', 'Arquivado', '×', 'Um arquivo sobre escopo', '#ffad75', '#201512', ['Arquitetura', 'Git', 'Escopo', 'Decisão']],
        ];

        foreach ($experiments as $order => [$slug, $title, $description, $label, $status, $icon, $kicker, $primary, $secondary, $stack]) {
            Experiment::updateOrCreate(['slug' => $slug], [
                'title' => $title,
                'description' => $description,
                'label' => $label,
                'status' => $status,
                'icon' => $icon,
                'kicker' => $kicker,
                'problem' => 'Ideias demais podem ficar paradas quando não existe um lugar seguro para testar, errar e aprender.',
                'approach' => 'O experimento transforma curiosidade em pequenos ciclos de construção, observação e registro do que mudou na prática.',
                'outcome' => 'Um aprendizado concreto que continua útil mesmo quando a ideia muda de direção.',
                'accent_primary' => $primary,
                'accent_secondary' => $secondary,
                'stack' => $stack,
                'phases' => [
                    ['title' => 'Escolher uma pergunta', 'description' => 'Toda experiência começa com uma dúvida concreta que merece uma resposta construída.'],
                    ['title' => 'Fazer o menor teste', 'description' => 'A primeira versão deve ser pequena o suficiente para terminar e observar.'],
                    ['title' => 'Registrar o aprendizado', 'description' => 'O resultado continua útil mesmo quando o experimento não vira uma aplicação.'],
                ],
                'learnings' => ['Começar pequeno reduz a distância entre intenção e prática.', 'Um experimento arquivado ainda pode produzir uma decisão melhor.', 'Documentar o caminho torna o próximo teste mais rápido.'],
                'sort_order' => $order,
                'is_published' => true,
            ]);
        }
    }
}
