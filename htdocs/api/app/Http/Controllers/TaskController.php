<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function getAll()
    {
        return response()->json(Task::all());
    }

    public function get($id)
    {
        return response()->json(Task::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Task = Task::create($request->all());

        return response()->json($Task, 201);
    }

    public function update($id, Request $request)
    {
        $Task = Task::findOrFail($id);
        $Task->update($request->all());

        return response()->json($Task, 200);
    }

    public function delete($id)
    {
        Task::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}