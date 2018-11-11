<?php

namespace App\Http\Controllers;

use App\Models\ActivityEvent;
use Illuminate\Http\Request;

class ActivityEventController extends Controller
{

    public function getAll()
    {
        return response()->json(ActivityEvent::all());
    }

    public function get($id)
    {
        return response()->json(ActivityEvent::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $ActivityEvent = ActivityEvent::create($request->all());

        return response()->json($ActivityEvent, 201);
    }

    public function update($id, Request $request)
    {
        $ActivityEvent = ActivityEvent::findOrFail($id);
        $ActivityEvent->update($request->all());

        return response()->json($ActivityEvent, 200);
    }

    public function delete($id)
    {
        ActivityEvent::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}