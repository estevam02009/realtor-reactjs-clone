import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute"; 
import Header from "./components/Header";


import Home from "./pages/Home";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import ForgotPassword from "./pages/ForgotPassword";
import Listing from "./pages/Listing";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SigIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing" element={<EditListing />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
