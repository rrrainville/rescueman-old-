<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountTransaction extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'number',
        'account_id',
        'transaction_date',
        'amount',
        'transaction_type',
        'regarding_id',
        'statuscode',
        'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'account_transactions';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
