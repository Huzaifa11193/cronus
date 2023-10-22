import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React,{useState,useEffect} from 'react'

function Report({auth}) {
    const [fields, setFields] = useState([{ id: 1, value: "" }]);

    const addField = () => {
      setFields([...fields, { id: Date.now(), value: "" }]);
    };
  
    const removeField = (id) => {
      setFields(fields.filter((field) => field.id !== id));
    };
  
    const handleInputChange = (id, event) => {
      const updatedFields = fields.map((field) =>
        field.id === id ? { ...field, value: event.target.value } : field
      );
      setFields(updatedFields);
    };
  
    return (
      <AuthenticatedLayout
      user={auth.user}
  >
      <Head title="Calendar" />
  
      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">Staff</div>
                  <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold">Form</h2>
        <form>
          {fields.map((field) => (
            <div key={field.id} className="mt-4 flex">
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e)}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Field"
              />
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="ml-2 px-3 py-2 bg-purple-400 text-white rounded-md"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addField}
            className="mt-4 px-3 py-2 bg-pink-300 text-white rounded-md"
          >
            +
          </button>
        </form>
      </div>
              </div>
          </div>
      </div>
  </AuthenticatedLayout>
    )
  
}

export default Report
