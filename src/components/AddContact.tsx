import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContacts } from '../store/contactSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../store/store';

interface ContactFormProps {
  isEditMode?: boolean;
}

const AddContact: React.FC<ContactFormProps> = ({ isEditMode = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const contactToEdit = contacts.find(contact => contact.id === id);

  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    mobileNo: '',
    isActive: false,
  });

  useEffect(() => {
    if (isEditMode && contactToEdit) {
      const updatedContact = {
        ...contactToEdit,
        mobileNo: contactToEdit.mobileNo.toString()
      };
      setContact(updatedContact);
    }
  }, [isEditMode, contactToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(editContacts({ 
        ...contact, 
        id: contactToEdit!.id
      }));
    } else {
      dispatch(addContact({ ...contact, id: new Date().toISOString() }));
    }
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-center">{isEditMode ? 'Edit Contact' : 'Create Contact'}</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            name="firstname"
            placeholder="Enter First Name"
            type="text"
            value={contact.firstname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            name="lastname"
            placeholder="Enter Last Name"
            type="text"
            value={contact.lastname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            name="mobileNo"
            placeholder="Enter Mobile Number"
            type="text"
            value={contact.mobileNo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isActive"
                value="true"
                checked={contact.isActive === true}
                onChange={() => setContact(prevContact => ({ ...prevContact, isActive: true }))}
                className="form-radio"
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isActive"
                value="false"
                checked={contact.isActive === false}
                onChange={() => setContact(prevContact => ({ ...prevContact, isActive: false }))}
                className="form-radio"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          {isEditMode ? 'Update Contact' : 'Save Contact'}
        </button>
      </form>
    </div>
  );
};

export default AddContact;
