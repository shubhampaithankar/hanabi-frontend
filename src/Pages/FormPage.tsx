import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { User, createOrGetEntry, updateEntry } from '../Services/ApiService';

const FormPage = () => {

  const navigate = useNavigate();
  const [params] = useSearchParams();

  const username = params.get('username') as string;

  // Use one single state instead of multiple states for inputs
  const [formData, setFormData] = useState<User>({
    dateOfBirth: '',
    email: '',
    name: '',
    phoneNumber: '',
    username
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const response = await updateEntry(formData);
    if (response.data.ack === 1) {
      navigate('/result');
    }
  };

  const handleReset = () => {
    return navigate('/home');
  };

  const getUserData = async (username: string) => {
    const response = await createOrGetEntry(username);
    if (response.data.ack === 1) {
      const { dateOfBirth, email, name, phoneNumber } = response.data.user as User;
      setFormData((prev: User) => ({
        ...prev, 
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth).toISOString().substring(0, 10) : '',
        email,
        name,
        phoneNumber,
      }));
    }
  };

  useEffect(() => {
    (async () => {
      if (!username) { // if no username param is found in url, return to homepage
        return navigate('/');
      } else {
        getUserData(username);
      }
    })();
  }, []);

  return (
    <section className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100%' }}>
      <form className='form w-25 p-2 border mt-2' onSubmit={handleSubmit}>
        <h2 className='m-2'>{username}`s details</h2>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="Name">Name</label>
          <input
            className='form-control'
            type="text"
            value={formData?.name || ''}
            onChange={(e) => setFormData((prev: User) => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="phoneNumber">Phone Number</label>
          <input
            className='form-control'
            type="tel"
            value={formData?.phoneNumber || ''}
            onChange={(e) => setFormData((prev: User) => ({ ...prev, phoneNumber: Number(e.target.value) }))}
            placeholder="Enter your phone number"
            maxLength={10}
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="email">Email</label>
          <input
            className='form-control'
            type="email"
            value={formData?.email || ''}
            onChange={(e) => setFormData((prev: User) => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group m-1">
          <label className='m-1' htmlFor="dob">Date of Birth</label>
          <input
            className='form-control'
            type="date"
            value={formData?.dateOfBirth || ''}
            onChange={(e) => setFormData((prev: User) => ({ ...prev, dateOfBirth: e.target.value }))}
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
