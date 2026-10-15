<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('hero_eyebrow');
            $table->string('hero_title');
            $table->string('hero_title_emphasis');
            $table->text('hero_lead');
            $table->string('about_name');
            $table->text('about_title');
            $table->text('about_lead');
            $table->string('about_photo_url')->nullable();
            $table->json('about_steps');
            $table->json('stack');
            $table->string('contact_text');
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('manifesto_eyebrow');
            $table->string('manifesto_title');
            $table->text('manifesto_title_emphasis');
            $table->text('manifesto_description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_profiles');
    }
};
