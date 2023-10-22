import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import NineDotsDropdown from '@/Components/navbar/NineDotsDropdown';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
           {/* ------------ navbar ------------- */}
<nav class="bg-white border-gray-200 ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center">
        <div className="hidden sm:flex sm:items-center sm:ml-6">
                       
                            <div className="ml-3 relative [&>div>div>div]:ring-gray-200">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {/* {user.name} */}
                                                <div className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-100">
                                                    <img src="./dots_nine_icon.png" alt="My Image" />
                                                </div>
                                               
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                    <Dropdown.Link href={route('calendar.show')} icon="./calendar-icon.svg">
    Calendar
</Dropdown.Link>
<Dropdown.Link href={route('staff.show')} icon="./staff-icon.svg">
    Staff
</Dropdown.Link>
<Dropdown.Link href={route('report.show')} icon="./report-icon.svg">
    Report
</Dropdown.Link>
<Dropdown.Link href={route('profile.edit')} icon="./account-and-settings-icon.svg">
    Setting
</Dropdown.Link>
<Dropdown.Link href={route('logout')} icon="./logout-icon.svg" method="post" as="button">
    Log Out
</Dropdown.Link>

                                        {/* <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link> */}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
        </div>



        

        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    {/* <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div> */}

                    <div className="pt-4 pb-1 border-t border-gray-200 ">
                        {/* <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div> */}

                        <div className="mt-3 space-y-1 ">
                                        <ResponsiveNavLink href={route('calendar.show')}>Calendar</ResponsiveNavLink>
                                        <ResponsiveNavLink href={route('staff.show')}>Staff</ResponsiveNavLink>
                                        <ResponsiveNavLink href={route('report.show')}>Report</ResponsiveNavLink>

                                        <ResponsiveNavLink href={route('profile.edit')}>Account & Settings</ResponsiveNavLink>
                                        <ResponsiveNavLink href={route('logout')} method="post" as="button">
                                            Log Out
                                        </ResponsiveNavLink>

                        </div>
                    </div>
                </div>


</nav>


{/* <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}

{/* ------------ navbar ends------------- */}
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
