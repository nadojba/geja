<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExperimentRequest;
use App\Models\Experiment;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ExperimentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Experiments/Index', [
            'experiments' => Experiment::query()->ordered()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Experiments/Form', ['experiment' => null]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExperimentRequest $request): RedirectResponse
    {
        Experiment::create($request->validated());

        return redirect()->route('admin.experiments.index');
    }

    /**
     * Display the specified resource.
     */
    public function edit(Experiment $experiment): Response
    {
        return Inertia::render('Admin/Experiments/Form', ['experiment' => $experiment]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExperimentRequest $request, Experiment $experiment): RedirectResponse
    {
        $experiment->update($request->validated());

        return redirect()->route('admin.experiments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Experiment $experiment): RedirectResponse
    {
        $experiment->delete();

        return redirect()->route('admin.experiments.index');
    }
}
