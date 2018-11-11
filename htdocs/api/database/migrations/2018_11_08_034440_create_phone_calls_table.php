<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhoneCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phone_calls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phone_number');
            $table->integer('call_from');
            $table->integer('call_to');
            $table->string('direction');
            $table->string('subject');
            $table->string('location');
            $table->dateTime('due_date');
            $table->dateTime('execution_date');
            $table->text('description');
            $table->string('status');
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
        Schema::dropIfExists('phone_calls');
    }
}
