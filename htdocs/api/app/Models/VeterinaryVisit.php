<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VeterinaryVisit extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'animal_id',
        'visit_date',
        'reason',
        'cost_amount',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'veterinary_visits';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
