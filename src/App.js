import React from 'react';
import Footer from './footer/index';
import './App.css';
import Creditos from './creditos';
import FindUs from './findUs';
import Header from './header';
import Home from './home';
import Products from './products';
import ScheduleForm from './scheduleForm';

function App() {
  return (
    <div className='bg-gray-100 w-full'>
     <Header />
     <Home /> 
     <Products />
     <FindUs />
     <ScheduleForm />
     <Footer />
     <Creditos />
    </div>
  );
}

export default App;
