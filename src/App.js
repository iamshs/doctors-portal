
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/Pages/Shared/Navbar'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Login from '../src/Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';
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
       <Route  path='/dashboard' element={ <RequireAuth>
         <Dashboard></Dashboard>
       </RequireAuth>}>
      
      <Route index element={<MyAppointment></MyAppointment>}></Route>
      <Route path='/dashboard/review' element={<MyReviews></MyReviews>} ></Route>

        </Route>

       <Route path='/login' element={<Login />} /> 
       <Route path='/signup' element={<SignUp />} /> 
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
