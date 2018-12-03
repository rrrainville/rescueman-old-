<?php

namespace App\Http\Controllers;

use App\Models\AccountTransaction;
use Illuminate\Http\Request;

class AccountTransactionController extends Controller
{
    public function getAll()
    {
        return response()->json(AccountTransaction::orderByRaw('transaction_date ASC')->get());
    }

    public function get($id)
    {
        return response()->json(AccountTransaction::find($id));
    }

    public function getDebits()
    {
        return response()->json(AccountTransaction::where('transaction_type', 'd')->orderByRaw('transaction_date ASC')->get());
    }

    public function getCredits()
    {
        return response()->json(AccountTransaction::where('transaction_type', 'c')->orderByRaw('transaction_date ASC')->get());
    }

    public function getByAccountId($id)
    {
        return response()->json(AccountTransaction::where('account_id', $id)->orderByRaw('transaction_date ASC')->get());
    }

    public function getTotalDebits()
    {
        return response()->json(AccountTransaction::where('transaction_type', 'd')->sum('amount'));
    }

    public function getTotalCredits()
    {
        return response()->json(AccountTransaction::where('transaction_type', 'c')->sum('amount'));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);
       
        $AccountTransaction = AccountTransaction::create($request->all());

        return response()->json($AccountTransaction, 201);
    }

    public function update($id, Request $request)
    {
        $AccountTransaction = AccountTransaction::findOrFail($id);
        $AccountTransaction->update($request->all());

        return response()->json($AccountTransaction, 200);
    }

    public function delete($id)
    {
        AccountTransaction::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}