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
            $table->string('type')->nullable($value = true);
            $table->string('gender')->nullable($value = true);
            $table->dateTimeTz('birthday')->nullable($value = true);
            $table->string('weight')->nullable($value = true);
            $table->string('breed')->nullable($value = true);
            $table->string('secondary_breed')->nullable($value = true);
            $table->string('color')->nullable($value = true);
            $table->string('secondary_color')->nullable($value = true);
            $table->string('alternate_name')->nullable($value = true);
            $table->string('activity_level')->nullable($value = true);
            $table->string('intake_location')->nullable($value = true);
            $table->dateTimeTz('intake_date')->nullable($value = true);
            $table->string('foster_tag')->nullable($value = true);
            $table->string('species')->nullable($value = true);
            $table->string('coat_lenght')->nullable($value = true);
            $table->string('size')->nullable($value = true);
            $table->string('microchipid')->nullable($value = true);
            $table->string('rabbiesid')->nullable($value = true);
            $table->string('details')->nullable($value = true);
            $table->string('statuscode');

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
