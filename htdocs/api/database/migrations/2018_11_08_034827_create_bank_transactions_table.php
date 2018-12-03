<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBankTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reference_number');
            $table->enum('transaction_type', ['d', 'w', 't']);
            $table->string('type')->nullable($value = true);
            $table->integer('from_account')->nullable($value = true);
            $table->integer('to_account')->nullable($value = true);
            $table->string('from')->nullable($value = true);
            $table->string('to')->nullable($value = true);
            $table->string('regarding')->nullable($value = true);
            $table->dateTime('due_date')->nullable($value = true);
            $table->dateTime('transaction_date')->nullable($value = true);
            $table->decimal('amount', 8, 2)->nullable($value = true);
            $table->string('method')->nullable($value = true);
            $table->string('statuscode')->nullable($value = true);
            $table->text('description')->nullable($value = true);
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
        Schema::dropIfExists('bank_transactions');
    }
}
