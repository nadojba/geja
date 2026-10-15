<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experiment;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalExperiments' => Experiment::count(),
                'publishedExperiments' => Experiment::published()->count(),
                'draftExperiments' => Experiment::where('is_published', false)->count(),
            ],
        ]);
    }
}
