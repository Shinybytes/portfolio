import HelloMarquee from '../HelloMarquee';
import './index.scss';
import Hero from '../Hero';


const Home = () => {
  return (
    <div className='App'>

      <Hero />
      <HelloMarquee />

    </div >
  );
}

export default Home;