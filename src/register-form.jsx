import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password:'',
    confirmPassword:'',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.userName.trim()) {
      errors.userName = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.passowrd = 'Password is required';
    }
    if (!/^\d{8}$/.test(formData.password)) {
      errors.password = 'Password must be 8 digits';
    }
    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Proceed to the next page if there are no errors
      navigate('/personal-details-form', { state: { ...formData, userName: formData.userName } });
  }  else {
      setErrors(errors);
    }
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
    <div className="max-w-md mx-auto mt-56 border-2 border-y-4 rounded-lg p-8 bg-sky-200 backdrop-blur-xl border-sky-400">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userName" className="block mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className={`border ${
              errors.userName ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>
        <div className='flex justify-between'>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
}
export default RegistrationForm;