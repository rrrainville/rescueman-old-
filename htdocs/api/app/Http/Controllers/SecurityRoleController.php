<?php

namespace App\Http\Controllers;

use App\Models\SecurityRole;
use Illuminate\Http\Request;

class SecurityRoleController extends Controller
{

    public function getAll()
    {
        return response()->json(SecurityRole::all());
    }

    public function get($id)
    {
        return response()->json(SecurityRole::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $SecurityRole = SecurityRole::create($request->all());

        return response()->json($SecurityRole, 201);
    }

    public function update($id, Request $request)
    {
        $SecurityRole = SecurityRole::findOrFail($id);
        $SecurityRole->update($request->all());

        return response()->json($SecurityRole, 200);
    }

    public function delete($id)
    {
        SecurityRole::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}