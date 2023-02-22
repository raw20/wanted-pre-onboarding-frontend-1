import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </div>
  );
};

export default App;
