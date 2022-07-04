import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'
import './Home.css'


export const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID = "1" title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID = "2" title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID = "3" title='Now Playing' fetchURL={requests.requestNowPlaying}/>
    </div>
  )
}
