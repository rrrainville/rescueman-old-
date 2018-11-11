<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'home_phone',
        'business_phone',
        'street_line_1',
        'street_line_2',
        'state_prov',
        'postal_code',
        'roles',
        'volunteer',
        'foster',
        'can_foster',
        'foster_home_inspected',
        'foster_unfit',
        'foster_home_inspected_by',
        'adopter_home_inspected',
        'adopter_unfit',
        'adopter_contract',
        'adopter_home_inspected_by', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'people';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
