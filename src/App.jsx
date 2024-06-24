// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import Header from './components/Header'
// import Footer from './components/Footer.jsx'

// import Signup from './Pages/Signup'
// import Login from './Pages/Login'
// import Rental from './Pages/Rental'
// import Customer from './Pages/Customer'
// import Showroom from './Pages/Showroom'
// import BookNow from './Pages/BookNow'
// import Profile from './Pages/Profile.jsx'
// import Uploadvehicle from './Pages/Uploadvehicle'
// import Payment from './Pages/Payment'
// import Termsandconditions from './Pages/Termsandconditions'
// import Rentedvehicle from './Pages/Rentedvehicle'
// import Contract from './Pages/Contract'

// import '@fortawesome/fontawesome-free/css/all.css';
// import ProtectedRoute from './components/ProtectedRoute.jsx'

// function App() {
//   return (
//     <Router>

//       <Routes>
//       {/* <Route exact path='/Header' element={<Header />} /> */}
//         <Route path='/' element={<Home />} />
//         <Route path='/Home' element={<Home />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/Signup' element={<Signup />} />
//         <Route path='/Customer' element={<Customer />} />
//         <Route path='/Rentedvehicle' element={<Rentedvehicle />} />
//         <Route path='/Rental' element={<Rental />} />
//         <Route path='/ShowRoom' element={<Showroom />} />
//         <ProtectedRoute path='/BookNow' element={<BookNow />} />
//         <Route path='/Profile' element={<Profile />} />
//         <ProtectedRoute path='/Uploadvehicle' element={<Uploadvehicle />} />
//         <Route path='/BookNow' element={<BookNow/>} />
//         <Route path='/Payment' element={<Payment />} />
//         <Route path='/Termsandconditions' element={<Termsandconditions />} />
//         <Route path='/Contract' element={<Contract />} />

//         <Route path='/Footer' element={<Footer />} />

//       </Routes>

//     </Router>
//   )
// }

// export default App

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Rental from "./Pages/Rental";
import Customer from "./Pages/Customer";
import Showroom from "./Pages/Showroom";
import BookNow from "./Pages/BookNow";
import Profile from "./Pages/Profile.jsx";
import Uploadvehicle from "./Pages/Uploadvehicle";
import Payment from "./Pages/Payment";
import Termsandconditions from "./Pages/Termsandconditions";
import Rentedvehicle from "./Pages/Rentedvehicle";
import Contract from "./Pages/Contract";

import "@fortawesome/fontawesome-free/css/all.css";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/Header' element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Rentedvehicle" element={<Rentedvehicle />} />
        <Route path="/ShowRoom" element={<Showroom />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/Profile" element={<Profile />} />
        
        <Route element={<ProtectedRoute rentalOnly />}>
          <Route path="/Rental" element={<Rental />} />

        </Route>
        <Route path="/Uploadvehicle" element={<Uploadvehicle />} />

        <Route path="/BookNow" element={<BookNow />} />
       
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Termsandconditions" element={<Termsandconditions />} />
        <Route path="/Contract" element={<Contract />} />

        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
