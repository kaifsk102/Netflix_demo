import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import hero_banner from '/hero_banner.jpg'
import hero_title from '/hero_title.png'
import './Home.css'
import TitleCards from '../../Component/TitleCards/TitleCards'
import Footer from '../../Component/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        
         <div className='hero relative '>
          <img src={hero_banner} alt="banner" className=' banner-img w-full ' />
          <div className='hero-caption absolute pl-2 w-full bottom-10 '>
              <img src={hero_title} alt="" className='caption-img inline' />
              <p className='ml-10'>
             Discovering his ties to a secret ancient order, a young man living in 
             modern <br /> Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className='hero-btns  text-black  px-10 space-x-5 mt-5'>
              <button className='btn inline-flex bg-gray-200 gap-2 hover:bg-dark rounded-lg items-center px-6 py-2 '><i className='img fa fa-play  text-lg'></i>Play</button>
              <button className='btn inline-flex text-gray-300 bg-lightdark hover:bg-deepdark gap-2 rounded-lg items-center py-2 px-3 '><i className='img fa fa-info-circle  text-lg'></i>More Info</button>
           </div> 
           <TitleCards /> 
         </div>
        </div>
        <div className='more-cards'>
          < TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          < TitleCards title={"Only on Netflix"} category={"popular"}/>
          < TitleCards title={"Upcoming"} category={"upcoming"}/>
          < TitleCards title={"Top Pick or You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home