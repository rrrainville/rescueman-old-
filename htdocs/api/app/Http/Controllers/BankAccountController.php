<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use Illuminate\Http\Request;

class BankAccountController extends Controller
{

    public function getAll()
    {
        return response()->json(BankAccount::all());
    }

    public function get($id)
    {
        return response()->json(BankAccount::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'statecode' => 'required', 
            'created_by' => 'required', 
            'updated_by' => 'required'
        ]);

        $BankAccount = BankAccount::create($request->all());

        return response()->json($BankAccount, 201);
    }

    public function update($id, Request $request)
    {
        $BankAccount = BankAccount::findOrFail($id);
        $BankAccount->update($request->all());

        return response()->json($BankAccount, 200);
    }

    public function delete($id)
    {
        BankAccount::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}