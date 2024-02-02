import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Proceed to the next page if there are no errors
      navigate('/payment-form', { state: { ...formData, userName: location.state.userName } });
    } else {
      setErrors(errors);
    }
  };
  
  const handlePrevious = () => {
    navigate('/register-form'); // Go back to the register page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-28 border-2 border-y-4 rounded-lg p-8 bg-sky-200 backdrop-blur-xl border-sky-400">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`border ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="middleName" className="block mb-1">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`border ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`border ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`border ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        <div className='flex justify-between'>
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Next
        </button>
        </div>
      </form>
    </div>
  );
};
export default PersonalDetailsForm;
