import { useState } from 'react'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Infrastructure from './pages/Infrastructure';
import Products from './pages/Products';
import AssociatedConcerns from './pages/AssociatedConcerns';
import Enquiry from './pages/Enquiry';
import ProfessionalFooter from './components/Footer';
import Blog from './pages/Blog';
import DetailBlogPage from './pages/DetailBlogPage';
import { ToastContainer,Flip } from 'react-toastify'
import FandQ from './components/FandQ';
function App() {

  return (
    <>
     {/*<BrowserRouter>
     <ToastContainer transition={Flip}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/infrastructure' element={<Infrastructure/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/associatedconcerns' element={<AssociatedConcerns/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/fq' element={<FandQ/>}/>
        <Route path='/blog/:id' element={<DetailBlogPage/>}/>
      </Routes>
      <ProfessionalFooter/>
    </BrowserRouter> */}

    <div className='text-center text-5xl font-extrabold'>Temporary not available</div>
    </>
  )
}

export default App
