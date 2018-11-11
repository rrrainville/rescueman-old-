<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject',
        'due_date',
        'execution_date',
        'description',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'tasks';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
