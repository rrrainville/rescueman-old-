<?php

namespace App\Http\Controllers;

use App\Models\Veterinary;
use Illuminate\Http\Request;

class VeterinaryController extends Controller
{

    public function getAll()
    {
        return response()->json(Veterinary::all());
    }

    public function get($id)
    {
        return response()->json(Veterinary::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Veterinary = Veterinary::create($request->all());

        return response()->json($Veterinary, 201);
    }

    public function update($id, Request $request)
    {
        $Veterinary = Veterinary::findOrFail($id);
        $Veterinary->update($request->all());

        return response()->json($Veterinary, 200);
    }

    public function delete($id)
    {
        Veterinary::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}