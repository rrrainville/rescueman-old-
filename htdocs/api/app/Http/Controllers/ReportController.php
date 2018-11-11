<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{

    public function getAll()
    {
        return response()->json(Report::all());
    }

    public function get($id)
    {
        return response()->json(Report::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Report = Report::create($request->all());

        return response()->json($Report, 201);
    }

    public function update($id, Request $request)
    {
        $Report = Report::findOrFail($id);
        $Report->update($request->all());

        return response()->json($Report, 200);
    }

    public function delete($id)
    {
        Report::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}