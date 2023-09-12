import React from 'react'
import './Home.css'
import Main from './Main'
import Requests from './Request'
import Row from './Row'

const Home = () => {

  const key = 'c948e08674ef69c748ac2e6fab44aeaf'

  return (
    <>
     <Main/> 
    
    <Row rowID='1' title='Now playing' fetchURL={`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`} />
    <Row rowID='2' title='Rating' fetchURL={Requests.requestPopular} />
    <Row rowID='3' title='Upcoming' fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`} />
    <Row rowID='4' title='Top rated' fetchURL={ ` https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`} />
    <Row rowID='5' title='Popular' fetchURL={Requests.requestPopular} />
    <Row rowID='6' title='Trending' fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`}/>

    </>
  )
}

export default Home