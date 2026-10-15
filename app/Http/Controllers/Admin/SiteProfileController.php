<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SiteProfileRequest;
use App\Models\SiteProfile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SiteProfileController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('Admin/SiteProfile/Form', [
            'profile' => SiteProfile::query()->firstOrFail(),
        ]);
    }

    public function update(SiteProfileRequest $request, SiteProfile $siteProfile): RedirectResponse
    {
        $validated = $request->validated();
        $steps = $validated['about_steps'];

        foreach ($steps as $index => &$step) {
            $image = $request->file("about_steps.{$index}.image");

            if ($image instanceof UploadedFile) {
                $step['image'] = Storage::disk('public')->url(
                    $image->store('site-profile/steps', 'public'),
                );
            }
        }
        unset($step);

        $validated['about_steps'] = $steps;
        $siteProfile->update($validated);

        return to_route('admin.profile.edit');
    }
}
