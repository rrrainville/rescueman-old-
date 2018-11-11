<?php

namespace App\Http\Controllers;

use App\Models\VeterinaryVisit;
use Illuminate\Http\Request;

class VeterinaryVisitController extends Controller
{

    public function getAll()
    {
        return response()->json(VeterinaryVisit::all());
    }

    public function get($id)
    {
        return response()->json(VeterinaryVisit::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $VeterinaryVisit = VeterinaryVisit::create($request->all());

        return response()->json($VeterinaryVisit, 201);
    }

    public function update($id, Request $request)
    {
        $VeterinaryVisit = VeterinaryVisit::findOrFail($id);
        $VeterinaryVisit->update($request->all());

        return response()->json($VeterinaryVisit, 200);
    }

    public function delete($id)
    {
        VeterinaryVisit::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}