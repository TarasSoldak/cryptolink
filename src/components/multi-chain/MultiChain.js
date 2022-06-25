import React from 'react'
import './multi-chain.scss'
import coin from '../../images/Subtract.png'
import terra from '../../images/terra.png'
import solana from '../../images/solana.png'
import moonRiver from '../../images/moon-river.png'
import avalanche from '../../images/avalanche.png'

const MultiChain = () => {
    return (
        <div className='chain-block'>
            <div className='chain-block-text'>
                <h2>Multi-Chain</h2>
                <p>Multi-Chain means multiple opportunities for yield across many
                    different blockchains. The CryptoLink brings our users the
                    best possible yield diversification by supporting more than just one blockchain.
                </p>
            </div>
            <div className='chain-block-coin'>
                <ul className='coin-list'>
                    <li className='coin-item'>
                        <p className='coin-name terra'>Terra</p>
                        <img src={coin} alt='coin-img' />
                        <img className='coin' src={terra} alt='terra-img' />
                    </li>
                    <li className='coin-item'>
                        <p className='coin-name solana'>Solana</p>

                        <img src={coin} alt='coin-img' />
                        <img className='coin' src={solana} alt='solana-img' />
                    </li>
                    <li className='coin-item'>
                        <p className='coin-name'>MoonRiver</p>

                        <img src={coin} alt='coin-img' />
                        <img className='coin' src={moonRiver} alt='moon-img' />

                    </li>
                    <li className='coin-item'>
                        <p className='coin-name'>Avalanche</p>

                        <img src={coin} alt='coin-img' />
                        <img className='coin' src={avalanche} alt='avalanche-img' />

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MultiChain