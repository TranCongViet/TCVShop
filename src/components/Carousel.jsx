import React, { useEffect, useState } from 'react';
import { getData } from '../context/DataContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { Link } from 'react-router-dom';
import CarouselSkeleton from '../components/skeleton/CarouselSkeleton';

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAllProducts();
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: 'block',
            borderRadius: '50px',
            background: '#f53347',
            color: 'white',
            position: 'absolute',
            padding: '2px',
            left: '50px',
          }}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: 'block',
            borderRadius: '50px',
            background: '#f53347',
            color: 'white',
            position: 'absolute',
            padding: '2px',
            right: '50px',
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 800, // md breakpoint (768px)
        settings: {
          arrows: false, // Ẩn arrows trên màn hình nhỏ hơn 768px
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          arrows: true, // Hiển thị arrows trên màn hình lớn
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <div>
          <Slider {...settings}>
            {data?.slice(0, 7)?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="-z-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
                >
                  <div className="my-20 flex h-[600px] flex-col items-center justify-center gap-10 px-4 md:my-0 md:flex-row">
                    <div className="space-y-3 md:space-y-6">
                      <h3 className="font-sans text-sm font-semibold text-red-500">
                        Powering Your World with the Best Products
                      </h3>
                      <h1 className="line-clamp-2 text-xl font-bold text-white uppercase md:line-clamp-3 md:w-[500px] md:text-4xl">
                        {item.title}
                      </h1>
                      <p className="line-clamp-3 pr-7 text-gray-400 md:w-[500px]">
                        {item.description}
                      </p>
                      <Link to={`/products/${item.id}`}>
                        <button className="mt-2 cursor-pointer rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-3 py-2 text-white">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                    <div>
                      <img
                        src={
                          Array.isArray(item.images)
                            ? item.images[0]
                            : item.images
                        }
                        alt={item.title}
                        className="w-[350px] rounded-full shadow-2xl shadow-red-400 transition-all hover:scale-105 md:w-[550px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Category />
        </div>
      )}
    </>
  );
};
export default Carousel;
