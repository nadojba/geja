<?php

namespace App\Models;

use Database\Factories\BookFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title', 'author', 'year', 'tag', 'image', 'colors', 'summary', 'ideas',
    'sort_order', 'is_published',
])]
class Book extends Model
{
    /** @use HasFactory<BookFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'year' => 'integer',
            'colors' => 'array',
            'ideas' => 'array',
            'sort_order' => 'integer',
            'is_published' => 'boolean',
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
            'title' => $this->title,
            'author' => $this->author,
            'year' => $this->year,
            'tag' => $this->tag,
            'image' => $this->image,
            'colors' => $this->colors,
            'summary' => $this->summary,
            'ideas' => $this->ideas,
        ];
    }
}
