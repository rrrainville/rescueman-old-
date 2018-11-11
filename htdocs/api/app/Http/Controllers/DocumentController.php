<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{

    public function getAll()
    {
        return response()->json(Document::all());
    }

    public function get($id)
    {
        return response()->json(Document::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Document = Document::create($request->all());

        return response()->json($Document, 201);
    }

    public function update($id, Request $request)
    {
        $Document = Document::findOrFail($id);
        $Document->update($request->all());

        return response()->json($Document, 200);
    }

    public function delete($id)
    {
        Document::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}