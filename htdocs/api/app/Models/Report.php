<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'query', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'reports';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
