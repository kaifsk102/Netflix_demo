import React,{useEffect , useRef, useState} from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './TitleCard.css'
import { Link } from 'react-router-dom';

const TitleCards = ({title , category}) => {

  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRjNDE4YWNhMjkxMWU4YWFjODEyZWZjMzlkNDYyZCIsIm5iZiI6MTczMDk0OTI2Ny4zMzY3OTU4LCJzdWIiOiI2NzJjMmU1OWViMGZkZDljZDg0YjVkZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZMUOZyYQhxleisq6GdaNknmM-4tIh_4N84dg5GnfyM0'
    }
  };
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(Response => Response.json())
    .then(Response => setApiData(Response.results))
    .catch(err => console.error(err));

  })


  return (
    <div className='titlecard  mt-5 px-10   '>
        <h2 className='font-bold mb-3'>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list flex gap-3  overflow-auto" ref={cardsRef}>
            {apiData.map((card,index)=>{
                return <Link to={`/Player/${card.id}`} className="card relative" key={index}>
                    <img className='max-w-60 cursor-pointer rounded' src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                    <p className='  absolute top-3   right-3 font-bold'>{card.original_title}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default TitleCards