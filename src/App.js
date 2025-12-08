import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/user/Login';
import Regsiter from './pages/user/Regsiter';
import UserDashboard from './pages/user/UserDashboard';
import ScrollToTop from './pages/TopToBack/ScrollToTop';
import Top from './pages/TopToBack/Top';
import OtpVerification from './pages/user/OtpVerification';
import MyProfile from './pages/user/Myrpofile';
import MyCourse from './pages/user/MyCourse';
import MyJob from './pages/user/MyJob';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Skills from './pages/skill/Skills';
import Contact from './pages/contact/Contact';




const App = () => {
  return (
    <>
    <Header />
    <ScrollToTop />
        <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
       
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/otpverify" element={<OtpVerification />} />

        {/* User Dashboard */}
        <Route path="/user" element={<UserDashboard />}>
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myjobs" element={<MyJob />} />
          <Route path="mycourses" element={<MyCourse />} />
        </Route>

      </Routes>
        <Top />
      <Footer />
    </>
  );
};

export default App;
