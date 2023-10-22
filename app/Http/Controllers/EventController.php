<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Inertia\Inertia;
class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Event::orderby('datetime')->paginate(10);
        return Inertia::render('Staff/Staff', [
            'events' => $data //ye probs mai pass hoa hy
        ]);
    }

   
    public function create()
    {
       
    }

    public function store(StoreEventRequest $request)
    {
       
    }

    public function show(Event $event)
    {

    }

    
    public function edit(Event $event)
    {
        
    }

  
    public function update(UpdateEventRequest $request, Event $event)
    {
   
    }


    public function destroy(Event $event)
    {
        $event->delete();
    }
}
