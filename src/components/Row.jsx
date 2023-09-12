import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const Row = ({title, fetchURL , rowID}) => {

    const [ movie , setMovie]= useState([])


    useEffect(() => {
      axios.get(fetchURL).then((response)=>{
        setMovie(response.data.results)

      })
    }, [fetchURL])

    const left = ()=>{
      const slider = document.getElementById('slider' + rowID);
      slider.scrollLeft= slider.scrollLeft - 500;
    }

    
    const right = ()=>{
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft= slider.scrollLeft + 500;
    }

  return (
    <>
    <h2 className='row-heading' >{title}</h2>
    <div className="row">
      <FaAngleLeft onClick={left} className='left_slider'  />
        <div id={'slider' + rowID} className='slider' >
          
        {movie.map((item, id) => (
                <div className='row_cards'>
                    <img className='card_img '  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                    <p className='row-title'>{item.title}</p>
                </div>
                

            ))}           

            
            
              <FaAngleRight  onClick={right} className='right_slider' />
            
        </div>
        
        
    </div>
    

    </>
  )
}

export default Row