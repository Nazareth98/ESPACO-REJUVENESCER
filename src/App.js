import React from 'react';
import './App.css';
import FindUs from './findUs';
import Header from './header';
import Home from './home';
import Products from './products';

function App() {
  return (
    <div className='bg-gray-200 w-full'>
     <Header />
     <Home /> 
     <Products />
     <FindUs />
    </div>
  );
}

export default App;
