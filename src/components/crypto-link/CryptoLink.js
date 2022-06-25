import React from 'react'
import './crypto-link.scss'
import googlePlay from '../../images/Google play.png'
import appStore from '../../images/App store.png'
import phone from '../../images/phone-illustration5.png'

const CryptoLink = () => {
  return (
    <div className='crypto'>
      <div className='crypto-text'>
        <h2>Passive income made easy with<br />
          the <span>CryptoLink</span> </h2>
      </div>
      <div className='crypto-button'>
        <img src={googlePlay} alt='google pay img' />
        <img src={appStore} alt=' app store img' />
      </div>
      <div className='crypto-menu'>

        <div className='menu-list'>
          <ul>
            <li className='one'>
              <h3>Download The CryptoLink</h3>
              <p >Get started with the CryptoLink 
                on your IOS or android mobile device.</p>
            </li>
            <li  className='two'>
              <h3>Create Your CryptoLink Account</h3>
              <p>Choose your username, password and confirm 
                your email address to register.</p>
            </li>
            <li  className='three'>
              <h3>Easily Begin Passive Income</h3>
              <p>Pick a yield strategy, Track your investments with the
                 dashboard then sit back relax and watch your 
                 CryptoLink portfolio grow.</p>
            </li>
          </ul>
        </div>

        <div className='menu-img'>
          <img src={phone} alt='phone-img' />
        </div>
      </div>

    </div>

  )
}

export default CryptoLink