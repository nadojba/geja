<?php

use App\Models\Book;
use App\Models\SiteProfile;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

uses(RefreshDatabase::class);

test('admin can create a book', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('admin.books.store'), [
        'title' => 'Código Limpo',
        'author' => 'Robert C. Martin',
        'year' => 2008,
        'tag' => 'ENGENHARIA',
        'image' => null,
        'colors' => ['#373e2a', '#161a10'],
        'summary' => 'Um resumo editorial.',
        'ideas' => ['Nomes revelam intenção.'],
        'sort_order' => 0,
        'is_published' => true,
    ]);

    $response->assertRedirect(route('admin.books.index'));
    expect(Book::query()->where('title', 'Código Limpo')->exists())->toBeTrue();
});

test('admin can upload a book cover', function () {
    Storage::fake('public');
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('admin.books.store'), [
        'title' => 'Livro com capa',
        'author' => 'Autor do livro',
        'year' => 2026,
        'tag' => 'ENGENHARIA',
        'image' => UploadedFile::fake()->image('capa.jpg'),
        'colors' => ['#373e2a', '#161a10'],
        'summary' => 'Um resumo editorial.',
        'ideas' => ['Uma ideia principal.'],
        'sort_order' => 0,
        'is_published' => true,
    ]);

    $response->assertRedirect(route('admin.books.index'));
    $image = Book::query()->where('title', 'Livro com capa')->firstOrFail()->image;
    expect($image)->toContain('/storage/books/covers/');
    Storage::disk('public')->assertExists('books/covers/'.basename($image));
});

test('admin can open a book for editing', function () {
    $user = User::factory()->create();
    $book = Book::factory()->create();

    $response = $this->actingAs($user)->get(route('admin.books.edit', $book));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Admin/Books/Form')
        ->where('book.id', $book->id)
    );
});

test('admin can update the site profile', function () {
    $user = User::factory()->create();
    $profile = SiteProfile::factory()->create();

    $response = $this->actingAs($user)->put(route('admin.profile.update', $profile), [
        ...$profile->toArray(),
        'hero_title' => 'Ideias que continuam',
    ]);

    $response->assertRedirect(route('admin.profile.edit'));
    expect($profile->fresh()->hero_title)->toBe('Ideias que continuam');
});

test('admin can upload an image for each about step', function () {
    Storage::fake('public');
    $user = User::factory()->create();
    $profile = SiteProfile::factory()->create([
        'about_steps' => [
            ['title' => 'Primeira etapa', 'description' => 'Descrição', 'image' => null],
        ],
    ]);

    $response = $this->actingAs($user)->put(route('admin.profile.update', $profile), [
        ...$profile->toArray(),
        'about_steps' => [[
            'title' => 'Primeira etapa',
            'description' => 'Descrição',
            'image' => UploadedFile::fake()->image('etapa-1.jpg'),
        ]],
    ]);

    $response->assertRedirect(route('admin.profile.edit'));
    expect($profile->fresh()->about_steps[0]['image'])->toContain('/storage/site-profile/steps/');
    Storage::disk('public')->assertExists('site-profile/steps/'.basename($profile->fresh()->about_steps[0]['image']));
});
