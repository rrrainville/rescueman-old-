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
            $table->string('name');
            $table->enum('transaction_type', ['d', 'w', 't']);
            $table->string('type');
            $table->integer('from_account');
            $table->integer('to_account');
            $table->string('from');
            $table->string('to');
            $table->string('regarding');
            $table->dateTime('due_date');
            $table->dateTime('transaction_date');
            $table->decimal('amount', 8, 2);
            $table->string('method');
            $table->string('status');
            $table->text('description');
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
        Schema::dropIfExists('bank_transactions');
    }
}
