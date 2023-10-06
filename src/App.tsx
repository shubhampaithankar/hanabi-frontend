import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<>Something went wrong, please try again later. <a href='/home'>Home</a></>}>
        <Suspense fallback={<>Loading...</>}>   
          <main className="container-fluid" style={{ height: '100vh' }}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </main>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;