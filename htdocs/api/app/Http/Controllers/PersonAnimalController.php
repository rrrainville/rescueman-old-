<?php

namespace App\Http\Controllers;

use App\Models\PersonAnimal;
use Illuminate\Http\Request;

class PersonAnimalController extends Controller
{

    public function getAll()
    {
        return response()->json(PersonAnimal::all());
    }

    public function get($id)
    {
        return response()->json(PersonAnimal::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $PersonAnimal = PersonAnimal::create($request->all());

        return response()->json($PersonAnimal, 201);
    }

    public function update($id, Request $request)
    {
        $PersonAnimal = PersonAnimal::findOrFail($id);
        $PersonAnimal->update($request->all());

        return response()->json($PersonAnimal, 200);
    }

    public function delete($id)
    {
        PersonAnimal::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}