import React from 'react';
import { useNavigate } from 'react-router-dom';

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto my-10 max-w-6xl">
      <h1 className="text-xl font-semibold text-gray-700">
        <span className="cursor-pointer" onClick={() => navigate('/')}>
          Home
        </span>{' '}
        /{' '}
        <span className="cursor-pointer" onClick={() => navigate('/products')}>
          Products
        </span>{' '}
        / <span>{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
