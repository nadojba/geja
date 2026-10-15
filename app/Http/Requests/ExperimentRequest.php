<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ExperimentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $experiment = $this->route('experiment');

        return [
            'slug' => ['required', 'string', 'alpha_dash', 'max:120', Rule::unique('experiments', 'slug')->ignore($experiment)],
            'title' => ['required', 'string', 'max:160'],
            'description' => ['required', 'string'],
            'label' => ['required', 'string', 'max:120'],
            'status' => ['required', 'string', 'max:80'],
            'icon' => ['required', 'string', 'max:20'],
            'kicker' => ['required', 'string', 'max:160'],
            'problem' => ['required', 'string'],
            'approach' => ['required', 'string'],
            'outcome' => ['required', 'string'],
            'accent_primary' => ['required', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'accent_secondary' => ['required', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'stack' => ['required', 'array', 'min:1'],
            'stack.*' => ['required', 'string', 'max:60'],
            'phases' => ['required', 'array', 'min:1'],
            'phases.*.title' => ['required', 'string', 'max:120'],
            'phases.*.description' => ['required', 'string'],
            'learnings' => ['required', 'array', 'min:1'],
            'learnings.*' => ['required', 'string'],
            'github_url' => ['nullable', 'url', 'max:255'],
            'demo_url' => ['nullable', 'url', 'max:255'],
            'sort_order' => ['required', 'integer', 'min:0'],
            'is_published' => ['boolean'],
        ];
    }
}
