<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veterinary extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',            
        'veterinary_id',
        'street_line_1',
        'street_line_2',
        'state_prov',
        'postal_code', 
        'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'veterinaries';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
