<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function getAll()
    {
        return response()->json(Person::all());
    }

    public function get($id)
    {
        return response()->json(Person::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Person = Person::create($request->all());

        return response()->json($Person, 201);
    }

    public function update($id, Request $request)
    {
        $Person = Person::findOrFail($id);
        $Person->update($request->all());

        return response()->json($Person, 200);
    }

    public function delete($id)
    {
        Person::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}