<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VeterinaryVisitService extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject',
        'animal_id',
        'veterinary_id',
        'event_date',
        'description',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'veterinary_visit_services';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
