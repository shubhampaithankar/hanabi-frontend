import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>   
        <main className="container-fluid" style={{ height: '100vh' }}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </main>
      </Suspense>
    </>
  );
};

export default App;