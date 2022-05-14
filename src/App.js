
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/Pages/Shared/Navbar'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Login from '../src/Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>

      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/appointment' element={
       
       <RequireAuth>
         <Appointment />
       </RequireAuth> 

       } />
       <Route path='/login' element={<Login />} /> 
       <Route path='/signup' element={<SignUp />} /> 
      </Routes>
    </div>
  );
}

export default App;
