import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../assets/Loading4.webm';
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="mx-auto mt-10 mb-10 max-w-6xl px-4">
          <button
            onClick={() => navigate('/')}
            className="mb-5 flex cursor-pointer items-center gap-1 rounded-md bg-gray-800 px-3 py-1 text-white"
          >
            <ChevronLeft /> Back
          </button>
          {searchData.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex h-[400px] items-center justify-center">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
