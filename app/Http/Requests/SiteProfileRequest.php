<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SiteProfileRequest extends FormRequest
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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            '*.url' => ['nullable', 'url', 'max:255'],
            'hero_eyebrow' => ['required', 'string', 'max:255'],
            'hero_title' => ['required', 'string', 'max:255'],
            'hero_title_emphasis' => ['required', 'string', 'max:255'],
            'hero_lead' => ['required', 'string'],
            'about_name' => ['required', 'string', 'max:255'],
            'about_title' => ['required', 'string'],
            'about_lead' => ['required', 'string'],
            'about_photo_url' => ['nullable', 'url', 'max:255'],
            'about_steps' => ['required', 'array', 'min:1'],
            'about_steps.*.title' => ['required', 'string', 'max:255'],
            'about_steps.*.description' => ['required', 'string'],
            'about_steps.*.image' => ['nullable'],
            'stack' => ['required', 'array', 'min:1'],
            'stack.*' => ['required', 'string', 'max:100'],
            'contact_text' => ['required', 'string', 'max:255'],
            'github_url' => ['nullable', 'url', 'max:255'],
            'linkedin_url' => ['nullable', 'url', 'max:255'],
            'contact_email' => ['nullable', 'email', 'max:255'],
            'manifesto_eyebrow' => ['required', 'string', 'max:255'],
            'manifesto_title' => ['required', 'string', 'max:255'],
            'manifesto_title_emphasis' => ['required', 'string', 'max:255'],
            'manifesto_description' => ['required', 'string'],
        ];
    }
}
