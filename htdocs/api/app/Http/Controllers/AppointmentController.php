<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{

    public function getAll()
    {
        return response()->json(Appointment::all());
    }

    public function get($id)
    {
        return response()->json(Appointment::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Appointment = Appointment::create($request->all());

        return response()->json($Appointment, 201);
    }

    public function update($id, Request $request)
    {
        $Appointment = Appointment::findOrFail($id);
        $Appointment->update($request->all());

        return response()->json($Appointment, 200);
    }

    public function delete($id)
    {
        Appointment::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}