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

function Calendar({ auth }) {
  const [currentView, setCurrentView] = useState('month');
  
  const Cdata= [
    { startDate: '2023-12-01T09:45', endDate: '2023-12-01T11:00', title: 'Meeting' },
    { startDate: '2023-12-01T12:00', endDate: '2023-12-01T13:30', title: 'Go to a gym' },
  ];

  const { data, currentDate } = useState({

    currentDate: new Date(),
  });

  




  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Calendar" />

      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 text-xl">Calendar</div>

            <Paper>
              <div className="view-selector float-right space-x-2 pr-2">
                {/* Buttons to switch between views */}
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
    </AuthenticatedLayout>
  );
}

export default Calendar;
