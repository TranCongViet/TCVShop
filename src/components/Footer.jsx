import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="items-center justify-around bg-gray-900 py-10 text-gray-200 md:flex">
      {/* bottom section */}
      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-red-500">TCVShop</span>. All rights reserved
        </p>
      </div>

      <div className="mt-5 max-w-7xl text-center md:mt-0">
        {/* social media links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-center text-xl font-semibold">Follow me</h3>
          <div className="mt-2 flex justify-center space-x-4">
            <Link
              to="https://www.facebook.com/tcv.hcmus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <FaInstagram />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
