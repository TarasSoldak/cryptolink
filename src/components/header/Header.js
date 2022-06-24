import React from 'react'
import './header.scss'
import logo from '../../images/Frame 7.png'

const Header = () => {
    return (
        <header >
            <div className='header-logo'>
                <div className='header-logo-block'>
                <img className='logo-img' src={logo} alt='logo'/>
                <p className='logo-text'>CryptoLink</p>
                </div>
                <div className='header-link'>
                    <p className='header-link-span'>Log in</p>
                </div>
            </div>

        </header>
    )
}

export default Header