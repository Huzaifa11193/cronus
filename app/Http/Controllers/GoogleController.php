<?php

namespace App\Http\Controllers;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
class GoogleController extends Controller
{
    public function signInwithGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    public function callbackToGoogle()
    {
        try {
     
            $user = Socialite::driver('google')->stateless()->user();
            return response()->json($user);
         
     
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }

    public function edit(){
        return Inertia::render('Auth/GoogleSetPasswordAndPhone');
    }
}
