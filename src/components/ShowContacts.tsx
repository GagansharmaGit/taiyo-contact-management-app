import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { delContact } from '../store/contactSlice';

const ShowContacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(delContact(id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 mt-16">
      <div className="fixed top-4">
        <Link
          to="/add-contact"
          className="inline-block rounded bg-slate-500 text-white py-2 px-4 hover:bg-blue-600"
        >
          Create Contact
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {contacts.length === 0 ? (
          <p>No Contact Found. Please add a contact.</p>
        ) : (
          contacts.map(contact => (
            <div key={contact.id} className="bg-slate-300 shadow-md rounded p-4 flex flex-col items-center w-56">
              <img 
                src="https://via.placeholder.com/40" 
                alt="Contact" 
                className="w-12 h-12 rounded-full mb-2"
              />
              <p className="font-semibold text-lg">{contact.firstname} {contact.lastname}</p>
              
              <p className="text-gray-500 mb-4">{contact.mobileNo}</p>
              <p className={`text-gray-500 mb-2 ${contact.isActive ? 'text-green-500' : 'text-red-500'}`}>
                {contact.isActive ? 'Active' : 'Inactive'}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/edit-contact/${contact.id}`)}
                  className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowContacts;
