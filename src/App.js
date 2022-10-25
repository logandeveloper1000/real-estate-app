import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Sign-in' element={<SignIn />} />
        <Route path='/Sign-out' element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
