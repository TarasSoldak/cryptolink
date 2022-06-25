import React from 'react'
import iPhone from '../../images/iPhone2.png'
import './swap-crypto.scss'

const SwapCrypto = () => {
  return (
    <div className='swap-block'>
<div className='swap-block-img'>
   <img className='swap-img' src={iPhone} alt='phone-img'/> 
</div>
<div className='swap-block-text'>
<h2>CryptoLink</h2>
<p className='swap-text'>The CryptoLink is a centralized DeFi application built for next-generation staking, yield farming and financial services. Our mission is to remove all the
     technical barriers that come with decentralized finance so that everyone can experience the benefits of DeFi.</p>
<button className='swap-button'>Get Started</button>
</div>
    </div>
  )
}

export default SwapCrypto