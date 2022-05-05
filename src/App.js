import React from 'react';
import About from './about/indes';
import './App.css';
import FindUs from './findUs';
import Header from './header';
import Home from './home';
import Products from './products';
import ScheduleForm from './scheduleForm';

function App() {
  return (
    <div className='bg-gray-200 w-full'>
     <Header />
     <Home /> 
     <Products />
     <FindUs />
     <ScheduleForm />
     <About />
    </div>
  );
}

export default App;
