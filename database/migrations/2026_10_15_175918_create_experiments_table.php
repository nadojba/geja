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
        Schema::create('experiments', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('description');
            $table->string('label');
            $table->string('status');
            $table->string('icon', 20);
            $table->string('kicker');
            $table->text('problem');
            $table->text('approach');
            $table->text('outcome');
            $table->string('accent_primary', 7);
            $table->string('accent_secondary', 7);
            $table->json('stack');
            $table->json('phases');
            $table->json('learnings');
            $table->string('github_url')->nullable();
            $table->string('demo_url')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true)->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiments');
    }
};
