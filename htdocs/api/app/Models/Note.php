<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'body', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'notes';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
