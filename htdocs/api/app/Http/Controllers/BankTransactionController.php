<?php

namespace App\Http\Controllers;

use App\Models\BankTransaction;
use App\Models\AccountTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

    private function createTransactions(BankTransaction $request)
    {
        $faker = Faker::create();

        //creates transactions
        if($request->transaction_type == 'd') {
            // $data = $this->createDeposit($BankTransaction);
            $data = [
                'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
                'account_id' => $request->to_account,
                'transaction_date' => $request->transaction_date,
                'amount' => $request->amount,
                'transaction_type' => 'c',
                'regarding_id' => $request->id,
                'statuscode' => $request->statuscode,
                'created_by' => $request->created_by,
                'updated_by' => $request->updated_by
            ];

            $AccountTransaction = AccountTransaction::create($data);
        } else if($request->transaction_type == 'w') {
            // $data = $this->createPayment($BankTransaction);
            $data = [
                'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
                'account_id' => $request->from_account,
                'transaction_date' => $request->transaction_date,
                'amount' => $request->amount,
                'transaction_type' => 'd',
                'regarding_id' => $request->id,
                'statuscode' => $request->statuscode,
                'created_by' => $request->created_by,
                'updated_by' => $request->updated_by
            ];
            $AccountTransaction = AccountTransaction::create($data);
        } else if($request->transaction_type == 't') {
            // $data = $this->createTransfer($BankTransaction);
            $data = [
                'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
                'account_id' => $request->to_account,
                'transaction_date' => $request->transaction_date,
                'amount' => $request->amount,
                'transaction_type' => 'c',
                'regarding_id' => $request->id,
                'statuscode' => $request->statuscode,
                'created_by' => $request->created_by,
                'updated_by' => $request->updated_by
            ];
            $AccountTransaction = AccountTransaction::create($data);

            $data = [
                'number' => $faker->randomNumber($nbDigits = NULL, $strict = false),
                'account_id' => $request->from_account,
                'transaction_date' => $request->transaction_date,
                'amount' => $request->amount,
                'transaction_type' => 'd',
                'regarding_id' => $request->id,
                'statuscode' => $request->statuscode,
                'created_by' => $request->created_by,
                'updated_by' => $request->updated_by
            ];
            $AccountTransaction = AccountTransaction::create($data);
        }

        return response()->json($AccountTransaction, 201);
    }

    public function create(Request $request)
    {
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

        //create transactions
        $response = $this->createTransactions($BankTransaction);
        
        Log::info($response);

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