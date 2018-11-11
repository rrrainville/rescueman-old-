<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'gender',
        'birthday',
        'weight',
        'breed',
        'secondary_breed',
        'color',
        'secondary_color',
        'alternate_name',
        'activity_level',
        'intake_location',
        'intake_date',
        'foster_tag',
        'species',
        'coat_lenght',
        'size',
        'microchipid',
        'rabbiesid',
        'detais', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'animals';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
