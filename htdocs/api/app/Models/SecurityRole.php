<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SecurityRole extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description', 
        'permissions',
        'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'security_roles';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
