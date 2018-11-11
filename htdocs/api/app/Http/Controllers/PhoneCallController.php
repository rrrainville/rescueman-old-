<?php

namespace App\Http\Controllers;

use App\Models\PhoneCall;
use Illuminate\Http\Request;

class PhoneCallController extends Controller
{

    public function getAll()
    {
        return response()->json(PhoneCall::all());
    }

    public function get($id)
    {
        return response()->json(PhoneCall::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $PhoneCall = PhoneCall::create($request->all());

        return response()->json($PhoneCall, 201);
    }

    public function update($id, Request $request)
    {
        $PhoneCall = PhoneCall::findOrFail($id);
        $PhoneCall->update($request->all());

        return response()->json($PhoneCall, 200);
    }

    public function delete($id)
    {
        PhoneCall::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}