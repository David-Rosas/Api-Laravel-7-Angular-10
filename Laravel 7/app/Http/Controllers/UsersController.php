<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
class UsersController extends Controller
{
    public function registerUser(Request $request){

        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'gender' => $request['gender'],
            'birthday' => $request['birthday'],
            'password' => Hash::make($request['password']),
        ]);
    }
}
