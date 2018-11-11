<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Email extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'from',
        'to',
        'subject',
        'due_date',
        'description',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'emails';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
