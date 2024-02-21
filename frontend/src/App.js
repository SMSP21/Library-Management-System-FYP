import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage';
import Registration from './Pages/RegistrationForm';
import HomePage from './Pages/HomePage';
import StaffDashboard from './Pages/StaffDashboard';
import MemberDashboard from './Pages/MemberDashboard';
import BookSearch from './Pages/BookSearch';
import MemberLogin from './Pages/MemberLogin';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage/>}/>
          <Route path = "/staff" element= {<Login/>} />
          <Route path = "/member" element= {<MemberLogin/>} />
          <Route path = "/Registration" element= {<Registration/>} />
          <Route path = "/login" element= {<Login/>} />
          <Route path = "/StaffDashboard" element= {<StaffDashboard/>} />
          <Route path = "/Signout" element= {<HomePage/>} />
          <Route path = "/MemberDashboard" element= {<MemberDashboard/>} />
          <Route path = "/book-search" element= {<BookSearch/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;