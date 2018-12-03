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

    public function getTransfers()
    {
        return response()->json(BankTransaction::where('transaction_type', 't')->get());
    }

    public function getDeposits()
    {
        return response()->json(BankTransaction::where('transaction_type', 'd')->get());
    }

    public function getPayments()
    {
        return response()->json(BankTransaction::where('transaction_type', 'w')->get());
    }

    public function create(Request $request)
    {
        error_log($request);

        $faker = Faker::create();

        $request->merge([
            'reference_number' => $faker->randomNumber($nbDigits = NULL, $strict = false)
        ]);

        $this->validate($request, [
            'reference_number' => 'required',
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

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