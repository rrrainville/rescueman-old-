<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'location', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'documents';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
