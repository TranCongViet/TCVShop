import banner from '../assets/banner1.jpg';
import { Link } from 'react-router-dom';

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative mx-auto h-[550px] max-w-7xl bg-cover bg-center pt-28 md:h-[600px] md:rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/60 md:rounded-2xl">
          <div className="px-4 text-center text-white">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
              Everything You Need, All in One Place
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Shop the latest trends, everyday essentials, and unbeatable deals
              — with free shipping on all orders.
            </p>
            <Link to={'/products'}>
              <button className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-600 md:px-6 md:py-3">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
