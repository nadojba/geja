<?php

namespace App\Http\Controllers;

use App\Models\Experiment;
use Inertia\Inertia;
use Inertia\Response;

class ExperimentController extends Controller
{
    public function show(string $slug): Response
    {
        $experiments = Experiment::query()->published()->ordered()->get();
        $experiment = $experiments->firstWhere('slug', $slug);
        abort_unless($experiment, 404);
        $position = $experiments->search(fn (Experiment $item): bool => $item->is($experiment));
        $nextExperiment = $experiments->get(($position + 1) % max(1, $experiments->count()));

        return Inertia::render('ExperimentDetail', [
            'experiment' => $experiment->toPublicArray(),
            'nextExperiment' => $nextExperiment?->toPublicArray(),
            'position' => $position + 1,
            'total' => $experiments->count(),
        ]);
    }
}
