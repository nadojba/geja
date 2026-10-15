<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Books/Index', [
            'books' => Book::query()->ordered()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Books/Form', ['book' => null]);
    }

    public function store(BookRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $this->storeUploadedCover($request, $data);
        Book::create($data);

        return to_route('admin.books.index');
    }

    public function show(Book $book): Response
    {
        return Inertia::render('Admin/Books/Form', ['book' => $book]);
    }

    public function edit(Book $book): Response
    {
        return Inertia::render('Admin/Books/Form', ['book' => $book]);
    }

    public function update(BookRequest $request, Book $book): RedirectResponse
    {
        $data = $request->validated();
        $this->storeUploadedCover($request, $data);
        $book->update($data);

        return to_route('admin.books.index');
    }

    public function destroy(Book $book): RedirectResponse
    {
        $book->delete();

        return to_route('admin.books.index');
    }

    /** @param array<string, mixed> $data */
    private function storeUploadedCover(BookRequest $request, array &$data): void
    {
        $image = $request->file('image');

        if ($image instanceof UploadedFile) {
            $data['image'] = Storage::disk('public')->url(
                $image->store('books/covers', 'public'),
            );
        }
    }
}
