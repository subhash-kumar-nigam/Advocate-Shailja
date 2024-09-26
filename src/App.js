import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Signin from './pages/user/Signin'
import Signup from './pages/user/Signup'
import Cart from './pages/cart/Cart'
import Career from './pages/services/Career'
import Consultancy from './pages/services/Consultancy'
import Complaints from './pages/services/Complaints'
import Policies from './pages/services/Policies'
import Individual from './pages/membership/Individual'
import Institutions from './pages/membership/Institutions'
import Products from './pages/membership/Products'
import MembershipRegistration from './pages/membership/MembershipRegistration'
import Events from './pages/activities/Events'
import Pressconference from './pages/activities/Pressconference'
import Mou from './pages/activities/Mou'
import News from './pages/activities/News'
import PressRelease from './pages/media/PressRelease'
import EventNews from './pages/media/EventNews'
import EventVideo from './pages/media/EventVideo'
import Gallery from './pages/media/Gallery'
import PublishedNews from './pages/media/PublishedNews'
import MediaRegistration from './pages/media/MediaRegistration'
import GoverningBody from './pages/administrative/GoverningBody'
import Ourteam from './pages/administrative/Ourteam'
import Leadership from './pages/administrative/Leadership'
import Footer from './components/Footer'
import BlogDetails from './pages/media/BolgDetails'
import AllMember from './pages/administrative/AllMember'
import MemberDetails from './pages/administrative/MemberDetails'
import MembershipForm from './pages/membership/MembershipForm'
import Opdslip from './components/Opdslip'


const App = () => {
  return (
    <div>
  
      <Header />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/opdslip' element={<Opdslip />} />
           <Route path='/career' element={<Career />} />
           <Route path='/consultancy' element={<Consultancy />} />
           <Route path='/complaints' element={<Complaints />} />
           <Route path='/policies' element={<Policies />} />
           <Route path='/individual' element={<Individual />} />
           <Route path='/institutions' element={<Institutions />} />
           <Route path='/products' element={<Products />} />
           <Route path='/membership_registration' element={<MembershipRegistration />} />
           <Route path='/events' element={<Events />} />
           <Route path='/press_conference' element={<Pressconference />} />
           <Route path='/mou' element={<Mou />} />
           <Route path='/news' element={<News />} />
           <Route path='/press_release' element={<PressRelease />} />
           <Route path='/event_news' element={<EventNews />} />
           <Route path='/published_news' element={<PublishedNews />} />
           <Route path='/blogdetails' element={<BlogDetails />} />
           <Route path='/event_video' element={<EventVideo />} />
           <Route path='/gallery' element={<Gallery />} />
           <Route path='/media_registration' element={<MediaRegistration />} />   
           <Route path='/membershipform' element={<MembershipForm />} />   
           <Route path='/aboutus' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/sign-in' element={<Signin />} />
           <Route path='/sign-up' element={<Signup />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/governing_body' element={<GoverningBody />} />
           <Route path='/allmember' element={<AllMember />} />
           <Route path='/member_details' element={<MemberDetails />} />
           <Route path='/our_team' element={<Ourteam />} />
           <Route path='/leadership' element={<Leadership />} />
       </Routes>
       <Footer />
      
    </div>
  )
}

export default App
