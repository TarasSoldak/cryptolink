import React from 'react'
import './footer.scss'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import m from '../../images/m.png'
import googlePlay from '../../images/Google play.png'
import appStore from '../../images/App store.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer-block'>
                <p>Need some help?</p>

                <div className='footer-block-info'>

                    <div>
                        <h2>Info@TheCryptoLink.com</h2>
                    </div>
                    <div className='footer-social-links'>
                        <img src={instagram} alt='social-link' />
                        <img src={twitter} alt='social-link' />
                        <img src={youtube} alt='social-link' />
                        <img src={m} alt='social-link' />
                    </div>
                </div>
                <hr />
                <div className='info-items-block'>
                        <p>© CryptoLink 2022. All Right Reserved.</p>
                        <p>Terms of Use</p>
                        <p>Help</p>
                    <div>
                        <img src={googlePlay} alt='googleplay-img'/>
                        <img src={appStore} alt='appstore-img'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer