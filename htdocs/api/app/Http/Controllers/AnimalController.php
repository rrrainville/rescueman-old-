<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{

    public function getAll()
    {
        return response()->json(Animal::all());
    }

    public function get($id)
    {
        return response()->json(Animal::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Animal = Animal::create($request->all());

        return response()->json($Animal, 201);
    }

    public function update($id, Request $request)
    {
        $Animal = Animal::findOrFail($id);
        $Animal->update($request->all());

        return response()->json($Animal, 200);
    }

    public function delete($id)
    {
        Animal::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}