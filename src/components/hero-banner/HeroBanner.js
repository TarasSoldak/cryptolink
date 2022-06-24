import React from 'react'
import './hero-banner.scss'
import bannerImg from '../../images/iPhone.png'
import bannerImg2 from '../../images/ellipses.png'

const HeroBanner = () => {
  return (
    <div className='banner'>
      <div className='banner-block'>
        <div className='banner-block-text'>
          <h1>The Passive<br /> Income App For All</h1>
          <p className='block-text'>Swap,Yield Farm, Stake, Borrow and Lend cryptocurrency all in one application</p>
          <button className='banner-button'>Learn more</button>
          <button className='banner-button green'>Get started</button>
        </div>
        <div className='banner-block-img'>
          <img className='banner-img' src={bannerImg} alt='banner-img' />
          <img className='banner-img-ellipse' src={bannerImg2} alt='banner2-img' />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner