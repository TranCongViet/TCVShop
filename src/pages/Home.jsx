import Carousel from '../components/Carousel';
import MidBanner from '../components/MidBanner';
import Features from '../components/Features';

import TestClerk from '../components/test';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <MidBanner />
      <Features />
      <TestClerk></TestClerk>
    </div>
  );
};

export default Home;
