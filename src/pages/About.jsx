import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold">About TCV</h1>

        <p className="text-lg text-gray-700">
          Welcome to{' '}
          <span className="font-semibold text-red-600">TCV Shop</span>, your
          one-stop destination for the latest and greatest in electronics. From
          cutting-edge gadgets to must-have accessories, we’re here to power up
          your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-base text-gray-700">
            At TCV, our mission is to make innovative technology accessible to
            everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">
            Why Choose TCV?
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-base text-gray-700">
            We envision a future where technology elevates everyday life. At
            TCV, we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="mb-2 text-xl font-semibold text-red-600">
            Join the TCV Family
          </h3>
          <p className="mb-4 text-gray-700">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — TCV has something for everyone.
          </p>
          <Link to={'/products'}>
            <button className="cursor-pointer rounded-xl bg-red-600 px-6 py-2 text-white transition duration-300 hover:bg-red-700">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
