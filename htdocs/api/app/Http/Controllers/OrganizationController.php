<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{

    public function showAllOrganizations()
    {
        return response()->json(Organization::all());
    }

    public function showOneOrganization($id)
    {
        return response()->json(Organization::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Organization = Organization::create($request->all());

        return response()->json($Organization, 201);
    }

    public function update($id, Request $request)
    {
        $Organization = Organization::findOrFail($id);
        $Organization->update($request->all());

        return response()->json($Organization, 200);
    }

    public function delete($id)
    {
        Organization::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}