import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <footer className="footer text-gray-200 py-10"> 
  <div className="max-w-7xl mx-auto px-4"> 
    <div className="footer-icon text-center space-x-5 text-3xl mb-5"> 
      <a href="" className="fa fa-instagram"></a> 
      <a href="" className="fa fa-facebook"></a> 
      <a href="" className="fa fa-twitter"></a>  
      <a href="" className="fa fa-youtube"></a> 
    </div> 
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-4"> 
        <div> 
        <h4 className="font-bold mb-2">Netflix</h4> 
        <ul> 
          <li><a href="/FAQ" className="hover:underline">FAQ</a></li> 
          <li><a href="/Investor-Relations" className="hover:underline">Investor Relations</a></li> 
          <li><a href="/Privacy" className="hover:underline">Privacy</a></li> 
          <li><a href="/Speed-Test" className="hover:underline">Speed Test</a></li> 
          <li><a href="/Legal-Notice" className="hover:underline">Legal Notice</a></li> 
        </ul> 
        </div> 
        <div> 
          <h4 className="font-bold mb-2">Support</h4> 
          <ul>
            <li><a href="/Help-Center" className="hover:underline">Help Center</a></li> 
            <li><a href="/Ways-to-Watch" className="hover:underline">Ways to Watch</a></li> 
            <li><a href="/Natflix-Orginal" className="hover:underline">Netflix Orginal</a></li> 
            <li><a href="/guides" className="hover:underline">Guides</a></li> 
          </ul> 
        </div> 
        <div> 
            <h4 className="font-bold mb-2">Company</h4> 
            <ul>
              <li><a href="/about" className="hover:underline">About</a></li> 
              <li><a href="/blog" className="hover:underline">Blog</a></li> 
              <li><a href="/jobs" className="hover:underline">Jobs</a></li> 
              <li><a href="/Account" className="hover:underline">Account</a></li> 
            </ul> 
        </div> 
      </div> 
            <div className="last text-center space-x-5 mb-4"> 
              <a href="/terms-of-service" className="hover:underline">Terms of service</a> 
              <a href="/privacy-policy" className="hover:underline">Privacy policy</a> 
              <a href="/license" className="hover:underline ">License</a> 
            </div> 
            <p className="text-center font-serif  text-slate-400 text-sm">© 2024 Your Company, Inc. All rights reserved.</p> 
  </div> 
        
  </footer> ); }

 export default Footer