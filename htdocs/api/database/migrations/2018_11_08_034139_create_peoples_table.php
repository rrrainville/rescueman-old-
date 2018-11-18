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
        Schema::create('persons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('home_phone')->nullable($value = true);
            $table->string('business_phone')->nullable($value = true);
            $table->string('street_line_1')->nullable($value = true);
            $table->string('street_line_2')->nullable($value = true);
            $table->string('state_prov')->nullable($value = true);
            $table->string('city')->nullable($value = true);
            $table->string('postal_code')->nullable($value = true);
            $table->string('roles')->nullable($value = true);
            $table->string('volunteer')->nullable($value = true);
            $table->string('foster')->nullable($value = true);
            $table->string('can_foster')->nullable($value = true);
            $table->boolean('home_inspected')->nullable($value = true);
            $table->string('home_inspected_by')->nullable($value = true);
            $table->boolean('home_unfit')->nullable($value = true);                       
            $table->boolean('adopter_contract')->nullable($value = true);            
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
        Schema::dropIfExists('persons');
    }
}
