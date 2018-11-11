<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{

    public function getAll()
    {
        return response()->json(Note::all());
    }

    public function get($id)
    {
        return response()->json(Note::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Note = Note::create($request->all());

        return response()->json($Note, 201);
    }

    public function update($id, Request $request)
    {
        $Note = Note::findOrFail($id);
        $Note->update($request->all());

        return response()->json($Note, 200);
    }

    public function delete($id)
    {
        Note::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}