<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{

    public function getAll()
    {
        return response()->json(Email::all());
    }

    public function get($id)
    {
        return response()->json(Email::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Email = Email::create($request->all());

        return response()->json($Email, 201);
    }

    public function update($id, Request $request)
    {
        $Email = Email::findOrFail($id);
        $Email->update($request->all());

        return response()->json($Email, 200);
    }

    public function delete($id)
    {
        Email::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}