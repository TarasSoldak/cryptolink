import './App.scss';
import CryptoLink from './components/crypto-link/CryptoLink';
import DebitCard from './components/debit-card/DebitCard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';
import MultiChain from './components/multi-chain/MultiChain';
import SwapCrypto from './components/swap-crypto/SwapCrypto';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroBanner/>
      <SwapCrypto/>
      <MultiChain/>
      <DebitCard/>
      <CryptoLink/>
      <Footer/>
    </div>
  );
}

export default App;
