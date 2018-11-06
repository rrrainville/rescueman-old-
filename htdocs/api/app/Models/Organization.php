<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'website', 'phone', 'address', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'organizations';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
