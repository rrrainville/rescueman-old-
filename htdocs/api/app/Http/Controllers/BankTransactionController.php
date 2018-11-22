<?php

namespace App\Http\Controllers;

use App\Models\BankTransaction;
use Illuminate\Http\Request;
use Faker\Factory as Faker;

class BankTransactionController extends Controller
{

    public function getAll()
    {
        return response()->json(BankTransaction::all());
    }

    public function get($id)
    {
        return response()->json(BankTransaction::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $faker = Faker::create();

        // error_log($request->get('from'));

        $request->merge([
            'name' => $faker->uuid
        ]);

        // $request->merge(['from' => 'roger']);

        // $data = $request->all();
        // error_log($request);

        $BankTransaction = BankTransaction::create($request->all());

        return response()->json($BankTransaction, 201);
    }

    public function update($id, Request $request)
    {
        $BankTransaction = BankTransaction::findOrFail($id);
        $BankTransaction->update($request->all());

        return response()->json($BankTransaction, 200);
    }

    public function delete($id)
    {
        BankTransaction::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}