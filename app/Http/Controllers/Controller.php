<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function show_calendar(Request $request)
    {
        return Inertia::render('Calendar/Calendar');
    }
    public function show_staff(Request $request)
    {
        return Inertia::render('Staff/Staff');
    }
    public function show_report(Request $request)
    {
        return Inertia::render('Report/Report');
    }

}


