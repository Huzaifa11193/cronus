import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {  ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
    Toolbar,
    TodayButton,
  AppointmentTooltip,
  DateNavigator,
  AppointmentForm,
  

} from '@devexpress/dx-react-scheduler-material-ui';

import {Modal , Button, Label,TextInput,Checkbox} from 'flowbite-react';

function Calendar({ auth }) {
  const [currentView, setCurrentView] = useState('month');
  
  const Cdata= [
    { startDate: '2023-12-01T09:45', endDate: '2023-12-01T11:00', title: 'Meeting' },
    { startDate: '2023-12-01T12:00', endDate: '2023-12-01T13:30', title: 'Go to a gym' },
  ];

  const { data, currentDate } = useState({

    currentDate: new Date(),
  });

  

  const [openModal, setOpenModal] = useState();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };



  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Calendar" />

      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 text-xl">Calendar</div>

           
            <Paper>
              <div className="view-selector">
              
                <button className='ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => props.setOpenModal('form-elements')}>Create Event</button>
                <div className='float-right space-x-2 pr-2'>
                <button
                  className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${currentView === 'day' ? 'bg-blue-600' : ''}`}
                  onClick={() => setCurrentView('day')}
                >
                  Day
                </button>
                <button
                  className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${currentView === 'week' ? 'bg-blue-600' : ''}`}
                  onClick={() => setCurrentView('week')}
                >
                  Week
                </button>
                <button
                  className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${currentView === 'month' ? 'bg-blue-600' : ''}`}
                  onClick={() => setCurrentView('month')}
                >
                  Month
                </button>
                </div>
              </div>

            
              <Scheduler data={Cdata}>
                <ViewState currentDate={currentDate} />
               
                {currentView === 'day' && <DayView startDayHour={9} endDayHour={14} />}
                {currentView === 'week' && <WeekView startDayHour={9} endDayHour={14} />}
                {currentView === 'month' && <MonthView />}
                <Appointments />
                <AppointmentTooltip />
                <Toolbar />
                <TodayButton />
                <DateNavigator />
                <AppointmentForm />
               

                
              </Scheduler>
            </Paper>
          </div>
        </div>
      </div>


      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>


    </AuthenticatedLayout>
  );
}

export default Calendar;
