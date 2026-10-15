<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Experiment;
use App\Models\SiteProfile;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('GejaLabs', [
            'experiments' => Experiment::query()
                ->published()
                ->ordered()
                ->get()
                ->map(fn (Experiment $experiment): array => $experiment->toPublicArray())
                ->values(),
            'books' => Book::query()
                ->published()
                ->ordered()
                ->get()
                ->map(fn (Book $book): array => $book->toPublicArray())
                ->values(),
            'profile' => (SiteProfile::query()->first() ?? SiteProfile::factory()->make())->toPublicArray(),
        ]);
    }
}
