import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold">About TCV</h1>

        <p className="text-lg text-gray-700">
          Welcome to{' '}
          <span className="font-semibold text-red-600">TCV Shop</span>, your
          one-stop destination for all your shopping needs. From home
          essentials, fashion, and electronics to entertainment and everyday
          convenience products, we’re here to provide a seamless, reliable, and
          enjoyable shopping experience.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-base text-gray-700">
            At TCV, our mission is to bring essential and exciting products to
            everyone, making daily life easier and more convenient — all at
            competitive prices and delivered with care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">
            Why Choose TCV?
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Wide range of high-quality products from trusted brands</li>
            <li>Fast and secure shipping </li>
            <li>Dedicated customer support, always ready to help </li>
            <li>Easy shopping experience with hassle-free returns </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-base text-gray-700">
            We envision a future where shopping is simple, convenient, and
            enjoyable for everyone. TCV is committed to offering new and diverse
            products that meet a wide range of needs while providing the best
            value for our customers.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="mb-2 text-xl font-semibold text-red-600">
            Join the TCV Family
          </h3>
          <p className="mb-4 text-gray-700">
            Whether you’re looking for home essentials, fashion, electronics, or
            unique items — TCV has something for everyone.
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
