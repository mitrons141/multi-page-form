import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const {
    userName,
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email,
    address,
    cardNumber,
    expiryMonth,
    expiryYear,
  } = location.state;


  return (
    <div className="max-w-md mx-auto mt-56 border-2 border-y-4 rounded-lg p-8 bg-sky-200 backdrop-blur-xl border-sky-400">
      <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
      <p><strong>Username:</strong> {userName}</p>
      <h2 className="text-2xl font-bold mb-4 mt-8">Personal Details</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Middle Name:</strong> {middleName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
      <h2 className="text-2xl font-bold mb-4 mt-8">Payment Details</h2>
      <p><strong>Card Number:</strong> {cardNumber}</p>
      <p><strong>Expiry Date:</strong> {expiryMonth}/{expiryYear}</p>
    </div>
  );
};

export default Result;