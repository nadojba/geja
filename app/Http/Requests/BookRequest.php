<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BookRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'author' => ['required', 'string', 'max:255'],
            'year' => ['required', 'integer', 'between:1000,3000'],
            'tag' => ['required', 'string', 'max:100'],
            'image' => [
                'nullable',
                Rule::when($this->hasFile('image'), [
                    'file',
                    'image',
                    'mimes:jpeg,jpg,png,webp,avif',
                    'max:5120',
                ], [
                    'string',
                    'max:255',
                ]),
            ],
            'colors' => ['required', 'array', 'size:2'],
            'colors.*' => ['required', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'summary' => ['required', 'string'],
            'ideas' => ['required', 'array', 'min:1'],
            'ideas.*' => ['required', 'string', 'max:255'],
            'sort_order' => ['required', 'integer', 'min:0'],
            'is_published' => ['boolean'],
        ];
    }
}
