
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import { router,Link } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import { FaTrash} from 'react-icons/fa';




function Staff({auth,events}) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);


  const toggleSelectAll = () => {
      setSelectAll(!selectAll);
      if (!selectAll) {
        // Select all items
        setSelectedItems(events.data.map((item) => item.id));
      } else {
        // Deselect all items
        setSelectedItems([]);
      }
    };

    const isItemSelected = (itemId) => selectedItems.includes(itemId);

    const toggleItemSelection = (itemId) => {
      if (isItemSelected(itemId)) {
        setSelectedItems(selectedItems.filter((id) => id !== itemId));
      } else {
        setSelectedItems([...selectedItems, itemId]);
      }
    };

    const bulkDelete = () =>{
        if(selectedItems.length === 0){
            alert("Nothing selected");
            return;
        }
        if (
            window.confirm(
                `Are you sure you want to delete ${selectedItems.length} items?`
            )
        ){
            const promises = selectedItems.map((itemId)=>

                router.delete(route("staff.delete",itemId))
               
            );
            Promise.all(promises)
             .then(() => {
                //clear all the selected  items all successful deletion
                setSelectedItems([]);
                alert('Successfully deleted');
             })
             .catch((error) => {
                console.error("Error deleting items:",error);
                alert("Failed to delete items");
             });
        }
    };

  
    const  deletePost = ( item ) =>{
        router.delete(route("staff.delete",item),{
            preserveScroll: true,
        })
    }



    
 
//   console.log("selectAllChecked:", selectAllChecked);
//   console.log("individualCheckboxes:", individualCheckboxes);
  return (
    <AuthenticatedLayout
    user={auth.user}
>
    <Head title="Staff" />
    <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">Staff</div>
                  
                  {/* Table starts */}
                  
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center    pb-4 bg-white dark:bg-gray-800">
        <div>
          
      <Dropdown label="Dropdown button" className='text-black'  dismissOnClick={false}>
      <Dropdown.Item className='text-white'>Delete</Dropdown.Item>
      <Dropdown.Item className='text-white'>Sort By Date</Dropdown.Item>
      <Dropdown.Item className='text-white'>Sign out</Dropdown.Item>
      </Dropdown>
    
        </div>
        <div>

        <Button onClick={bulkDelete} color="gray" className='bg-gray-800'>
        <FaTrash className="mr-3 h-4 w-4 text-white" />
          <p className="text-white">
            Delete
          </p>
        </Button>

        </div>
        <div className="relative ml-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>


    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" onChange={toggleSelectAll}  checked={selectAll} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
         { events.data.map((event,index) => (
            <tr  key={event.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id={`checkbox-table-search-${event.id}`}  onChange={() => toggleItemSelection(event.id)} checked={isItemSelected(event.id)} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-1" htmlFor={"checkbox-table-search-" + event.id } className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
             
                <div className="pl-3">
                    <div className="text-base font-semibold">{event.name}</div>
                    <div className="font-normal text-gray-500">{event.description}</div>
                </div>  
            </th>
            <td className="px-4 py-4">
                React Developer
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                <div className={`h-2.5 w-2.5 rounded-full mr-2 ${event.status === "open" ? 'bg-green-500' : 'bg-red-500'}`}></div> {event.status}
</div>
            </td>
            <td className="flex items-center justify-between  px-6 py-8">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                <Link onClick={(e) =>{ e.preventDefault(); deletePost(event.id)}}><FaTrash className="mr-3 h-4 w-4 text-white"/></Link>
            </td>
        </tr>
        ))
         }
          
           
    
        </tbody>
    </table>
</div>



                  </div>

              </div>
          </div>

    </AuthenticatedLayout>
  )
}

export default Staff

