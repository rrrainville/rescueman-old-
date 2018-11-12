<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('type');
            $table->string('gender');
            $table->date('birthday');
            $table->string('weight');
            $table->string('breed');
            $table->string('secondary_breed');
            $table->string('color');
            $table->string('secondary_color');
            $table->string('alternate_name');
            $table->string('activity_level');
            $table->string('intake_location');
            $table->date('intake_date');
            $table->string('foster_tag');
            $table->string('species');
            $table->string('coat_lenght');
            $table->string('size');
            $table->string('microchipid');
            $table->string('rabbiesid');
            $table->string('detais');
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
        Schema::dropIfExists('animals');
    }
}
