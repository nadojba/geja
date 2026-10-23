<div align="center">

# Geja Labs

**Um espaço para apresentar experimentos, compartilhar leituras e gerenciar conteúdo.**

Laravel 13 · React 19 · Inertia 3 · TypeScript · Tailwind CSS 4

[Funcionalidades](#funcionalidades) · [Executar localmente](#executar-localmente) · [Desenvolvimento](#desenvolvimento) · [Autor](#autor)

</div>

---

## Sobre o projeto

O Geja Labs reúne uma página pública e um painel administrativo em uma aplicação Laravel com React. Experimentos, livros e informações do perfil são gerenciados no painel e apresentados no site conforme seu estado de publicação.

O projeto combina backend, modelagem de conteúdo e interfaces em uma mesma aplicação, com Inertia conectando as rotas Laravel às páginas React.

## Funcionalidades

- **Página pública:** apresentação dos experimentos, livros publicados e perfil.
- **Detalhes de experimentos:** páginas individuais acessadas por slug.
- **Gestão de experimentos:** criação, edição, ordenação e publicação.
- **Gestão de livros:** cadastro e manutenção do conteúdo.
- **Perfil do site:** edição das informações exibidas na página pública.
- **Área administrativa:** acesso autenticado e encerramento de sessão.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Backend | PHP 8.3+, Laravel 13, Eloquent |
| Interface | React 19, TypeScript, Inertia 3 |
| Estilos e build | Tailwind CSS 4, Vite 8, Vite+ |
| Rotas tipadas | Laravel Wayfinder |
| Banco local padrão | SQLite |
| Qualidade | Pest, Larastan/PHPStan, Laravel Pint |

As versões e os comandos disponíveis estão em [composer.json](composer.json) e [package.json](package.json).

## Executar localmente

### Requisitos

- PHP compatível com as dependências do Composer e extensões exigidas pelo Laravel.
- Composer.
- Node.js compatível com Vite 8 e npm.
- SQLite habilitado no PHP, ou outro banco configurado no ambiente.

### Instalação

```bash
git clone https://github.com/nadojba/geja.git
cd geja
composer install
cp .env.example .env
php artisan key:generate
```

Com o SQLite padrão, crie o arquivo do banco:

```bash
php -r "file_exists('database/database.sqlite') || touch('database/database.sqlite');"
```

Antes de executar os seeders, configure suas credenciais locais no arquivo `.env`:

```dotenv
GEJA_ADMIN_NAME="Seu nome"
GEJA_ADMIN_EMAIL=voce@example.com
GEJA_ADMIN_PASSWORD="defina-uma-senha-local"
```

Depois, prepare o banco e a interface:

```bash
php artisan migrate --seed
npm install
npm run build
```

### Iniciar a aplicação

Em um terminal:

```bash
php artisan serve
```

Em outro:

```bash
npm run dev
```

- Site: [localhost:8000](http://localhost:8000)
- Administração: [localhost:8000/admin/login](http://localhost:8000/admin/login)

Entre com as credenciais configuradas antes do seed. Se alterar essas variáveis posteriormente, execute `php artisan db:seed --class=AdminUserSeeder` para atualizar o usuário.

## Desenvolvimento

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Desenvolvimento da interface |
| `npm run build` | Build da interface |
| `npm run check` | Verificações do Vite+ |
| `npm run types:check` | Verificação de tipos TypeScript |
| `composer lint:check` | Verificação de estilo PHP |
| `composer types:check` | Análise estática PHP |
| `composer test` | Estilo, análise estática e testes PHP |
| `composer ci:check` | Verificações de frontend e backend |

Os comandos acima correspondem aos scripts do repositório; sua listagem não representa uma execução ou aprovação dos testes.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| [app/Http/Controllers](app/Http/Controllers) | Fluxos públicos e administrativos |
| [app/Models](app/Models) | Modelos e regras de acesso aos dados |
| [routes/web.php](routes/web.php) | Rotas e proteção da área administrativa |
| [resources](resources) | Interface e recursos da aplicação |
| [database/seeders](database/seeders) | Conteúdo inicial e usuário administrativo |
| [tests](tests) | Testes da aplicação |

## Autor

**Leonardo Geja** — desenvolvedor Full Stack, com foco em PHP/Laravel e aplicações web.

[GitHub](https://github.com/nadojba) · [LinkedIn](https://www.linkedin.com/in/leonardogeja/)
