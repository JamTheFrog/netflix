import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'


export const Home = () => {
  return (
    <div>
      <Main/>
      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Now Playing' fetchURL={requests.requestNowPlaying}/>
    </div>
  )
}
