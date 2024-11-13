import React from 'react'

const Footer = () => {
  return (

<div className=' footer max-w-4xl space-y-5 py-10 '>

    <div className=' icon space-x-5 px-8  '>
      <i className='fa fa-facebook text-3xl'></i>
      <i className='fa fa-instagram text-3xl'></i>
      <i className='fa fa-twitter text-3xl'></i>
      <i className='fa fa-youtube text-3xl'></i>
    </div>
    <ul className=' grid grid-cols-4 gap-4 mb-7 '>
        <li>FAQ</li>
        <li>Account</li>
        <li>Investor Reletions</li>
        <li> Ways to Watch</li>
        <li>Privacy</li>
        <li>Corporate Information</li>
        <li> Speed Test</li>
        <li>Onlay on Netflix</li>
        <li>NetflixIndia</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
        <li> Legal Notices</li>
        <li> Help Center</li>
    </ul>
    <p className='text-sm font-serif text-gray-500'>&copy; NetflixIndia . All rights reserved.</p>
    
</div>
  )
}

export default Footer