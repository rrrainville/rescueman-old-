<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'number',
        'balance',
        'description', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'bank_accounts';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
