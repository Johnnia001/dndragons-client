import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <>
      <div className='title'>
        <h1>Critical Characters</h1>
        <br />
        <p>
          Build Your Role Play characters and keep them online so they are
          always with you.
        </p>
        <br />
        <div className='w-hat'>
          <img className='hat' src={require('./img/wizardHat.gif').default} />
        </div>
      </div>
    </>
  )
}

export default Home
