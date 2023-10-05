import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FormPage = () => {

  const navigate = useNavigate();
  const [params] = useSearchParams();

  const username = params.get('username');

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Save form data or perform any necessary actions
    console.log('Form submitted:', name, phoneNumber, email, dob);
    // Navigate to the result page or perform any necessary actions
    navigate('/result');
  };

  const handleReset = () => {
    return navigate('/home');
  };

  useEffect(() => {
    if (!username) {
      return navigate('/');
    } else {
      
    }
  });

  return (
    <section className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100%' }}>
      <form className='form w-25 p-2 border mt-2' onSubmit={handleSubmit}>
        <h2 className='my-2'>{username}`s details</h2>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="Name">Name</label>
          <input
            className='form-control'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="phoneNumber">Phone Number</label>
          <input
            className='form-control'
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="email">Email</label>
          <input
            className='form-control'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="dob">Date of Birth</label>
          <input
            className='form-control'
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="btn-group mx-1 my-3 text-center w-100">
          <button className='btn btn-success mx-2' type="submit">Submit</button>
          <button className='btn btn-danger mx-2' onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default FormPage;
