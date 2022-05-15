import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './page/Appointment/Appointment';
import Home from './page/Home/Home/Home';
import Navbar from './page/Home/Navbar/Navbar';

function App() {
  return (
    <div className='bg-white max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='appointment' element={<Appointment/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
