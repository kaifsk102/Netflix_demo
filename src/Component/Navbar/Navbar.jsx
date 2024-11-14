import React, { useEffect, useRef } from 'react'
import logo from '/logo.png'
import bell from '/bell_icon.svg'
import search from '/search_icon.svg'
import profile from '/profile_img.png'
import caret from '/caret_icon.svg'
import './Navbar.css'
import { logout } from '../../firebase'



const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='Navbar z-10 flex justify-between w-full py-4 text-white fill-white bg-transparent  fixed  '>
        <div className='Navbar-Left flex align-middle gap-12 '>
            
            <img src={logo} alt=" logo" width='90px' className=' ' />
            
            <ul className=' flex cursor-pointer gap-5'>
                <li className=" itemslist cursor-pointer">Home </li>
                <li className=" itemslist cursor-pointer">TV Shows</li>
                <li className=" itemslist cursor-pointer">Movies</li>
                <li className=" itemslist cursor-pointer">New & Popular</li>
                <li className=" itemslist cursor-pointer">My List</li>
                <li className=" itemslist cursor-pointer">Browse by Languages</li>   
            </ul>

        </div>
        <div className=' Navbar-Right flex  gap-5'>
        <img src={search} alt=""  className='icon align-middle'/> 
        <p> Children</p>
        <img src={bell} alt="" className='icon align-middle' />
        <div className=' profile flex align-middle gap-2 cursor-pointer relative '  >
          <img src= {profile} alt=""  className='icon align-middle rounded-full' />
          <img src= {caret} alt=""  className='icon align-middle' />
          <div className='dropdown absolute top-full right-0 w-max bg-gray-800 px-4 py-2 rounded-md underline  font-thin underline-offset-2 hidden ' > 
            <p onClick={()=>{logout()}} className='text-sm cursor-pointer' >SingOut of Netfilx </p>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar