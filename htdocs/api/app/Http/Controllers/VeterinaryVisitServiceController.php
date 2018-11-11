<?php

namespace App\Http\Controllers;

use App\Models\VeterinaryVisitService;
use Illuminate\Http\Request;

class VeterinaryVisitServiceController extends Controller
{

    public function getAll()
    {
        return response()->json(VeterinaryVisitService::all());
    }

    public function get($id)
    {
        return response()->json(VeterinaryVisitService::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $VeterinaryVisitService = VeterinaryVisitService::create($request->all());

        return response()->json($VeterinaryVisitService, 201);
    }

    public function update($id, Request $request)
    {
        $VeterinaryVisitService = VeterinaryVisitService::findOrFail($id);
        $VeterinaryVisitService->update($request->all());

        return response()->json($VeterinaryVisitService, 200);
    }

    public function delete($id)
    {
        VeterinaryVisitService::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}