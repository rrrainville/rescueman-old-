<?php

namespace App\Http\Controllers;

use App\Models\Transport;
use Illuminate\Http\Request;

class TransportController extends Controller
{

    public function getAll()
    {
        return response()->json(Transport::all());
    }

    public function get($id)
    {
        return response()->json(Transport::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Transport = Transport::create($request->all());

        return response()->json($Transport, 201);
    }

    public function update($id, Request $request)
    {
        $Transport = Transport::findOrFail($id);
        $Transport->update($request->all());

        return response()->json($Transport, 200);
    }

    public function delete($id)
    {
        Transport::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}