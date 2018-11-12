<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVeterinaryVisitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veterinary_visits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject');
            $table->integer('animal_id');
            $table->integer('veterinary_id');
            $table->dateTime('event_date');
            $table->text('description');
            $table->string('status');
            $table->integer('created_by');
            $table->integer('updated_by');
            $table->enum('statecode', ['active', 'inactive']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('veterinary_visits');
    }
}
