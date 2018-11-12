<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVeterinaryVisitServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veterinary_visit_services', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('animal_id');
            $table->dateTime('visit_date');
            $table->string('reason');
            $table->decimal('cost_amount', 8, 2);
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
        Schema::dropIfExists('veterinary_visit_services');
    }
}
