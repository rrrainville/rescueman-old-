<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BankTransaction extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'transaction_type',
        'type',
        'from_account',
        'to_account',
        'from',
        'to',
        'regarding',
        'due_date',
        'transaction_date',
        'amount',
        'method',
        'status',
        'description', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'bank_transactions';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
