<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonAnimal extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'contact_id',
        'animal_id',
        'role', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'person_animals';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
