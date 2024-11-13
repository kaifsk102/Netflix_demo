import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const{id} = useParams();
  const Navigate =useNavigate();

  const[apiData , setApiData] = useState({
    name:"",
    key:"",
    published_at: "",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRjNDE4YWNhMjkxMWU4YWFjODEyZWZjMzlkNDYyZCIsIm5iZiI6MTczMTA3ODIwNi40NzI5NTg4LCJzdWIiOiI2NzJjMmU1OWViMGZkZDljZDg0YjVkZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._IFgdO1w_zknSHDESDSxzVo9JYV5GnfF-DeSqjz10dI'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[]);
  
  return (
    <div className='h-svh flex flex-col justify-center  items-center'>
        <i className=' fa fa-arrow-circle-left text-3xl absolute top-5 left-5 cursor-pointer' onClick={()=>{Navigate(-2)}}></i>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
         frameborder='0' width='90%' height='90%' allowfullscreen title='Treser' 
         className=' rounded-md'></iframe>
         <div className='flex items-center mt-5 justify-between w-11/12'>
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.typeof}</p>
         </div>
    </div>
  )
}

export default Player