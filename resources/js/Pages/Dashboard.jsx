import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Kanban from './Upcoming Schedule/Kanban';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
                
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                    </div>
                </div>

                <Kanban/>
            </div>
        </AuthenticatedLayout>
    );
}