import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            
            

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    
                    <>
                      
                    <Link
                        href="/"
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                       
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M13.293 6.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586l3.293-3.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                    </>
              
            </div>
            
                {children}
            </div>
        </div>
    );
}
