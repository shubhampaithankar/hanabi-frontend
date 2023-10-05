import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();
  const returnToHomepage = () => navigate('/home'); 

  return (
    <section className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100%' }}>
      <h1>Congratulations!</h1>
      <p>Your form has been successfully submitted.</p>
      <button className='btn btn-primary' onClick={returnToHomepage}>Return to Homepage</button>
    </section>
  );
};

export default ResultPage;
