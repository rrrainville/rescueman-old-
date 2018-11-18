<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function getAll()
    {
        return response()->json(Product::all());
    }

    public function get($id)
    {
        return response()->json(Product::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required', 
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $Product = Product::create($request->all());

        return response()->json($Product, 201);
    }

    public function update($id, Request $request)
    {
        $Product = Product::findOrFail($id);
        $Product->update($request->all());

        return response()->json($Product, 200);
    }

    public function delete($id)
    {
        Product::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}