import React, { useEffect, useState } from 'react'
import './Main.css'
import Requests from './Request'
import axios from 'axios'

const Main = () => {
    const [movies , setMovies]= useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect (()=>{
          axios.get(Requests.requestPopular).then((response)=>{
              setMovies(response.data.results)
          })
    }, [])


    const cut=(str,num)=>{
      if (str?.length>num){
        return str.slice(0,num)+"..."
      }else{
        return str;
      }
    }
 


  return (
    <>
    <div className="main">
      <div   >
        <img className='main_img' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="inner_part">
          
            <h1 className='main-heading'>{movie?.title}</h1>
            
            <p className='main-p1'  >Released: {movie?.release_date}</p>
            <p className='main-p2'  >{cut(movie?.overview , 150) }</p>
            <button className='main_btn1'>Play</button>
            <button className='main_btn2'>Watch later</button>

        </div>
        </div>
        
      
    </div>
    </>





    
  )
}

export default Main