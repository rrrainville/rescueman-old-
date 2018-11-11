<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhoneCall extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'phone_number',
        'call_from',
        'call_to',
        'direction',
        'subject',
        'location',
        'due_date',
        'execution_date',
        'description',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'phone_calls';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
