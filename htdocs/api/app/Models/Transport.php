<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transport extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject',
        'pickup_location',
        'dropoff_location',
        'driver_id',
        'animal_id',
        'reason',
        'due_date',
        'execution_date',
        'description',
        'status', 'created_by', 'updated_by', 'statecode'
    ];

    protected $table = 'transports';   
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
