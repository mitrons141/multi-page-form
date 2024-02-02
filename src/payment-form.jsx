import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!/^\d{11}$/.test(formData.cardNumber)) {
      errors.cardNumber = 'Card number must be 11 digits';
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      errors.expiry = 'Expiry date is required';
    } else {
      const currentYear = new Date().getFullYear();
      const expiryYear = parseInt(formData.expiryYear, 10);
      if (expiryYear < currentYear) {
        errors.expiry = 'Expiry year must be the current year or later';
      }
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Proceed to the result page if there are no errors
      navigate('/result', { state: { ...formData, ...location.state } });
    } else {
      setErrors(errors);
    }
  };
  
  const handlePrevious = () => {
    navigate('/personal-details-form'); // Go back to the register page
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
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block mb-1">
            Card Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`border ${
              errors.cardNumber ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>
        <div>
          <label htmlFor="cvv" className="block mb-1">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className={`border ${
              errors.cvv ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
          )}
        </div>
        <div>
          <label htmlFor="expiryMonth" className="block mb-1">
            Expiry Month <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expiryMonth"
            name="expiryMonth"
            value={formData.expiryMonth}
            onChange={handleChange}
            className={`border ${
              errors.expiry ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
            placeholder="MM"
          />
        </div>
        <div>
          <label htmlFor="expiryYear" className="block mb-1">
            Expiry Year <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expiryYear"
            name="expiryYear"
            value={formData.expiryYear}
            onChange={handleChange}
            className={`border ${
              errors.expiry ? 'border-red-500' : 'border-gray-300'
            } rounded-md px-3 py-2 w-full`}
            placeholder="YYYY"
          />
          {errors.expiry && (
            <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
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
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};
export default PaymentForm;