export type Experiment = {
    slug: string;
    title: string;
    description: string;
    icon: string;
    label: string;
    status: string;
    kicker: string;
    problem: string;
    approach: string;
    outcome: string;
    accent: [string, string];
    stack: string[];
    phases: { title: string; description: string }[];
    learnings: string[];
    githubUrl?: string | null;
    demoUrl?: string | null;
};

export type Book = {
    title: string;
    author: string;
    year: number;
    tag: string;
    image?: string;
    colors: [string, string];
    summary: string;
    ideas: string[];
};

export type SiteProfile = {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleEmphasis: string;
    heroLead: string;
    aboutName: string;
    aboutTitle: string;
    aboutLead: string;
    aboutPhotoUrl?: string | null;
    aboutSteps: { title: string; description: string; image?: string | null }[];
    stack: string[];
    contactText: string;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
    contactEmail?: string | null;
    manifestoEyebrow: string;
    manifestoTitle: string;
    manifestoTitleEmphasis: string;
    manifestoDescription: string;
};

export const experiments: Experiment[] = [
    {
        slug: 'laboratorio',
        title: 'Um espaço para tirar ideias do papel.',
        description:
            'Cada experimento nasce de uma curiosidade, vira código e termina com um aprendizado registrado.',
        icon: '↗',
        label: 'O LABORATÓRIO',
        status: 'O laboratório',
        kicker: 'A origem de tudo',
        problem:
            'Ideias demais costumam ficar paradas quando não existe um lugar seguro para testar, errar e aprender.',
        approach:
            'O laboratório transforma curiosidade em pequenos ciclos de construção. Cada projeto tem uma hipótese, uma implementação e um registro do que mudou na prática.',
        outcome:
            'Um processo pessoal para continuar construindo mesmo quando a ideia ainda não está pronta para virar produto.',
        accent: ['#ff8739', '#c8ff00'],
        stack: ['Curiosidade', 'Código', 'Medição', 'Aprendizado'],
        phases: [
            {
                title: 'Escolher uma pergunta',
                description:
                    'Toda experiência começa com uma dúvida concreta que merece uma resposta construída.',
            },
            {
                title: 'Fazer o menor teste',
                description:
                    'A primeira versão deve ser pequena o suficiente para terminar e observar.',
            },
            {
                title: 'Registrar o aprendizado',
                description:
                    'O resultado continua útil mesmo quando o experimento não vira uma aplicação.',
            },
        ],
        learnings: [
            'Começar pequeno reduz a distância entre intenção e prática.',
            'Um experimento arquivado ainda pode produzir uma decisão melhor.',
            'Documentar o caminho torna o próximo teste mais rápido.',
        ],
    },
    {
        slug: 'mini-framework-php',
        title: 'Mini framework PHP',
        description:
            'Roteador e container de dependências feitos do zero, para entender o que os grandes frameworks fazem por baixo.',
        icon: '{}',
        label: 'PHP 8 · PSR-4 · COMPOSER · NO AR',
        status: 'No ar',
        kicker: 'Infraestrutura por baixo do framework',
        problem:
            'Usar um framework todos os dias resolve problemas, mas também esconde decisões importantes sobre roteamento, dependências e ciclo de vida.',
        approach:
            'A experiência reimplementa um núcleo mínimo em PHP 8: roteador, container de dependências, resolução de controllers e carregamento PSR-4.',
        outcome:
            'Uma visão concreta do que acontece entre uma requisição HTTP e a resposta final de uma aplicação PHP moderna.',
        accent: ['#c8ff00', '#373e2a'],
        stack: ['PHP 8', 'PSR-4', 'Composer', 'HTTP', 'Testes'],
        phases: [
            {
                title: 'Mapear a requisição',
                description:
                    'Definir como método e caminho encontram uma ação executável.',
            },
            {
                title: 'Resolver dependências',
                description:
                    'Criar um container pequeno para montar objetos sem acoplamento manual.',
            },
            {
                title: 'Expor o núcleo',
                description:
                    'Organizar o código para que o aprendizado possa ser executado e lido por outras pessoas.',
            },
        ],
        learnings: [
            'Abstrações ficam mais claras quando são implementadas do zero.',
            'Um contrato pequeno é mais fácil de testar e evoluir.',
            'Convenções de autoloading reduzem trabalho repetitivo.',
        ],
    },
    {
        slug: 'bot-de-monitoramento',
        title: 'Bot de monitoramento',
        description:
            'Um bot no Telegram que avisa quando algo sai do esperado: servidor fora do ar ou rotina que falhou.',
        icon: '>_',
        label: 'PHP · TELEGRAM API · CRON · EM CONSTRUÇÃO',
        status: 'Em construção',
        kicker: 'Alertas antes do problema crescer',
        problem:
            'Rotinas importantes podem falhar silenciosamente quando ninguém está acompanhando logs e servidores o tempo todo.',
        approach:
            'Um bot consulta sinais simples de saúde, transforma falhas em mensagens objetivas e usa o Telegram como o canal de resposta mais rápido.',
        outcome:
            'Uma base para automatizar a observabilidade de tarefas pequenas sem criar uma plataforma maior que o problema.',
        accent: ['#ff8739', '#323044'],
        stack: ['PHP', 'Telegram API', 'Cron', 'Webhooks', 'Logs'],
        phases: [
            {
                title: 'Definir sinais',
                description:
                    'Separar o que é falha real de uma oscilação que não exige ação.',
            },
            {
                title: 'Construir o aviso',
                description:
                    'Enviar contexto suficiente para decidir o próximo passo sem abrir cinco ferramentas.',
            },
            {
                title: 'Evitar ruído',
                description:
                    'Controlar repetição e frequência para que o alerta continue merecendo atenção.',
            },
        ],
        learnings: [
            'Um bom alerta responde o que aconteceu e onde olhar.',
            'Automação de infraestrutura precisa lidar com falhas da própria automação.',
            'Menos notificações, com mais contexto, geram mais confiança.',
        ],
    },
    {
        slug: 'painel-de-metricas',
        title: 'Painel de métricas',
        description:
            'Dashboard pessoal para acompanhar commits, horas de estudo e leituras ao longo do ano.',
        icon: '%',
        label: 'JAVASCRIPT · CANVAS · SQLITE · NO AR',
        status: 'No ar',
        kicker: 'Tornar o progresso visível',
        problem:
            'Quando estudo, trabalho e projetos ficam espalhados, fica difícil perceber consistência ou entender onde o tempo realmente foi investido.',
        approach:
            'O painel reúne eventos pessoais em uma base SQLite e os apresenta com visualizações pequenas, rápidas e legíveis no navegador.',
        outcome:
            'Um histórico visual que ajuda a trocar a sensação de produtividade por evidências e perguntas melhores.',
        accent: ['#ff8739', '#493026'],
        stack: ['JavaScript', 'Canvas', 'SQLite', 'Dados', 'Visualização'],
        phases: [
            {
                title: 'Coletar o mínimo',
                description:
                    'Registrar eventos que sejam fáceis de manter sem criar uma segunda jornada de trabalho.',
            },
            {
                title: 'Encontrar padrões',
                description:
                    'Transformar linhas de dados em tendências que possam orientar uma decisão.',
            },
            {
                title: 'Revisar o sistema',
                description:
                    'A métrica só vale quando muda o comportamento ou melhora a próxima pergunta.',
            },
        ],
        learnings: [
            'Visualização é uma forma de pensar, não só de decorar um dashboard.',
            'Métricas pessoais precisam respeitar contexto e intenção.',
            'Uma base simples pode responder perguntas importantes.',
        ],
    },
    {
        slug: 'o-que-nao-deu-certo',
        title: 'O que não deu certo',
        description:
            'Nem todo experimento vinga. Este fica registrado pelo que ensinou sobre arquitetura e escopo.',
        icon: '×',
        label: 'ARQUITETURA · GIT · ARQUIVADO',
        status: 'Arquivado',
        kicker: 'Um arquivo sobre escopo',
        problem:
            'Nem toda ideia merece virar um produto completo. Algumas crescem antes de provar que resolvem um problema real.',
        approach:
            'Este experimento foi encerrado de forma deliberada: revisar decisões, identificar o ponto de excesso e preservar o aprendizado antes de seguir.',
        outcome:
            'Um limite mais claro para escolher o que continuar, o que simplificar e o que arquivar sem tratar o encerramento como desperdício.',
        accent: ['#ffad75', '#201512'],
        stack: ['Arquitetura', 'Git', 'Escopo', 'Decisão'],
        phases: [
            {
                title: 'Perceber o desvio',
                description:
                    'Comparar a intenção original com o sistema que estava sendo construído.',
            },
            {
                title: 'Reduzir a superfície',
                description:
                    'Separar o aprendizado essencial das partes que só aumentavam manutenção.',
            },
            {
                title: 'Arquivar com contexto',
                description:
                    'Guardar as razões da decisão para não repetir o mesmo caminho sem perceber.',
            },
        ],
        learnings: [
            'Arquivar cedo pode ser uma decisão de engenharia.',
            'Escopo também é uma escolha técnica.',
            'O registro de uma tentativa evita que o time pague duas vezes pela mesma dúvida.',
        ],
    },
];

export const books: Book[] = [
    {
        title: 'A Startup Enxuta',
        author: 'Eric Ries',
        year: 2011,
        tag: 'NEGÓCIOS',
        image: 'capas/startup-enxuta.jpg',
        colors: ['#553120', '#1d1c23'],
        summary:
            'Eric Ries propõe tratar a criação de um produto como uma série de experimentos. Em vez de planejar por meses, a equipe lança rápido uma versão mínima, mede como as pessoas reagem e usa o que aprendeu para decidir o próximo passo.',
        ideas: [
            'Produto mínimo viável (MVP) para validar hipóteses',
            'Ciclo construir, medir, aprender',
            'Pivotar ou perseverar com base em dados',
            'Métricas que mostram aprendizado, não vaidade',
        ],
    },
    {
        title: 'Rápido e Devagar',
        author: 'Daniel Kahneman',
        year: 2011,
        tag: 'PSICOLOGIA',
        image: 'capas/rapido-e-devagar.jpg',
        colors: ['#323044', '#1a1923'],
        summary:
            'O psicólogo Daniel Kahneman descreve dois modos de pensar: o Sistema 1, rápido e intuitivo, e o Sistema 2, lento e analítico. O livro mostra como atalhos mentais levam a erros previsíveis de julgamento e de decisão.',
        ideas: [
            'Sistema 1 (rápido) e Sistema 2 (devagar)',
            'Heurísticas e vieses cognitivos',
            'Aversão à perda e ancoragem',
            'Excesso de confiança nas próprias previsões',
        ],
    },
    {
        title: 'Como Fazer Amigos e Influenciar Pessoas',
        author: 'Dale Carnegie',
        year: 1936,
        tag: 'RELACIONAMENTOS',
        image: 'capas/como-fazer-amigos.jpg',
        colors: ['#493026', '#201512'],
        summary:
            'Clássico sobre relacionamento humano. Carnegie reúne princípios práticos: demonstrar interesse genuíno pelos outros, ouvir com atenção, evitar criticar e fazer a outra pessoa se sentir valorizada.',
        ideas: [
            'Interesse genuíno pelas pessoas',
            'Ouvir mais do que falar',
            'Evitar críticas e discussões inúteis',
            'Lembrar e usar o nome da pessoa',
        ],
    },
    {
        title: 'Código Limpo',
        author: 'Robert C. Martin',
        year: 2008,
        tag: 'ENGENHARIA',
        image: 'capas/codigo-limpo.jpg',
        colors: ['#373e2a', '#161a10'],
        summary:
            'Robert C. Martin defende que código é escrito para ser lido por pessoas. O livro mostra como nomear bem, manter funções pequenas, tratar erros e escrever testes para que o software continue fácil de mudar.',
        ideas: [
            'Nomes que revelam intenção',
            'Funções pequenas, com uma responsabilidade',
            'Testes como rede de segurança',
            'Refatoração contínua',
        ],
    },
    {
        title: 'Hábitos Atômicos',
        author: 'James Clear',
        year: 2018,
        tag: 'PRODUTIVIDADE',
        image: 'capas/habitos-atomicos.jpg',
        colors: ['#292127', '#121015'],
        summary:
            'James Clear mostra que mudanças pequenas e consistentes geram grandes resultados com o tempo. O foco está em construir sistemas e identidade, e não apenas em perseguir metas.',
        ideas: [
            'Melhorar 1% ao dia',
            'Sistemas valem mais que metas',
            'Hábito óbvio, atraente, fácil e satisfatório',
            'Mudança de identidade',
        ],
    },
];

export const terminalExperiments = experiments
    .slice(1)
    .map(({ title, status }) => [title, status] as const);
