<?php

namespace App\Models;

use Database\Factories\ExperimentFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'slug', 'title', 'description', 'label', 'status', 'icon', 'kicker',
    'problem', 'approach', 'outcome', 'accent_primary', 'accent_secondary',
    'stack', 'phases', 'learnings', 'github_url', 'demo_url', 'sort_order',
    'is_published',
])]
class Experiment extends Model
{
    /** @use HasFactory<ExperimentFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'stack' => 'array',
            'phases' => 'array',
            'learnings' => 'array',
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('title');
    }

    /** @return array<string, mixed> */
    public function toPublicArray(): array
    {
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $this->icon,
            'label' => $this->label,
            'status' => $this->status,
            'kicker' => $this->kicker,
            'problem' => $this->problem,
            'approach' => $this->approach,
            'outcome' => $this->outcome,
            'accent' => [$this->accent_primary, $this->accent_secondary],
            'stack' => $this->stack,
            'phases' => $this->phases,
            'learnings' => $this->learnings,
            'githubUrl' => $this->github_url,
            'demoUrl' => $this->demo_url,
        ];
    }
}
