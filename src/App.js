import './App.scss';
import Header from './components/header/Header';
import HeroBanner from './components/hero-banner/HeroBanner';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroBanner/>
    </div>
  );
}

export default App;
