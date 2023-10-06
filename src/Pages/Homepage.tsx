import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: '/form',
      search: createSearchParams({
        username
      }).toString()
    });
  };
  
  return (
    <section className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100%' }}>
      <h1 className='my-2'>Welcome to the HanabiTech</h1>
      <form className='form w-25 p-2 border mt-2' onSubmit={handleSubmit}>
        <div className="form-group m-1">
          <label className='my-2 mx-1' htmlFor="username">Username</label>
          <input
            className='form-control'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mx-1 my-2">
          <button className='btn btn-primary w-25' type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Homepage;