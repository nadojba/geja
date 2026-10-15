<?php

namespace App\Models;

use Database\Factories\SiteProfileFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'hero_eyebrow', 'hero_title', 'hero_title_emphasis', 'hero_lead',
    'about_name', 'about_title', 'about_lead', 'about_photo_url', 'about_steps',
    'stack', 'contact_text', 'github_url', 'linkedin_url', 'contact_email',
    'manifesto_eyebrow', 'manifesto_title', 'manifesto_title_emphasis',
    'manifesto_description',
])]
class SiteProfile extends Model
{
    /** @use HasFactory<SiteProfileFactory> */
    use HasFactory;

    protected function casts(): array
    {
        return [
            'about_steps' => 'array',
            'stack' => 'array',
        ];
    }

    /** @return array<string, mixed> */
    public function toPublicArray(): array
    {
        return [
            'heroEyebrow' => $this->hero_eyebrow,
            'heroTitle' => $this->hero_title,
            'heroTitleEmphasis' => $this->hero_title_emphasis,
            'heroLead' => $this->hero_lead,
            'aboutName' => $this->about_name,
            'aboutTitle' => $this->about_title,
            'aboutLead' => $this->about_lead,
            'aboutPhotoUrl' => $this->about_photo_url,
            'aboutSteps' => $this->about_steps,
            'stack' => $this->stack,
            'contactText' => $this->contact_text,
            'githubUrl' => $this->github_url,
            'linkedinUrl' => $this->linkedin_url,
            'contactEmail' => $this->contact_email,
            'manifestoEyebrow' => $this->manifesto_eyebrow,
            'manifestoTitle' => $this->manifesto_title,
            'manifestoTitleEmphasis' => $this->manifesto_title_emphasis,
            'manifestoDescription' => $this->manifesto_description,
        ];
    }
}
