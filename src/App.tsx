<<<<<<< HEAD
import Router from './Router';
=======
import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';
import Nav from './components/Nav';
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router />
=======
      <UserContextProvider>
        <Nav />
        <Router />
      </UserContextProvider>
>>>>>>> 72e892fcd487c03c407e1bc3e3b2886075b1bc6f
    </div>
  );
};

export default App;
