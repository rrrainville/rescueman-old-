<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeoplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peoples', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('home_phone');
            $table->string('business_phone');
            $table->string('street_line_1');
            $table->string('street_line_2');
            $table->string('state_prov');
            $table->string('postal_code');
            $table->string('roles');
            $table->string('volunteer');
            $table->string('foster');
            $table->string('can_foster');
            $table->boolean('foster_home_inspected');
            $table->boolean('foster_unfit');
            $table->string('foster_home_inspected_by');
            $table->boolean('adopter_home_inspected');
            $table->boolean('adopter_unfit');
            $table->boolean('adopter_contract');
            $table->string('adopter_home_inspected_by');
            $table->string('created_by');
            $table->string('updated_by');
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
        Schema::dropIfExists('peoples');
    }
}
