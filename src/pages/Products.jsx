import { useEffect, useState } from 'react';
import { getData } from '../context/DataContext';
import FilterSection from '../components/FilterSection';
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json';
import MobileFilter from '../components/MobileFilter';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/skeleton/ProductCardSkeleton';
import Pagination from '../components/Pagination';

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts().finally(() => setLoading(false));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || item.category === category) &&
      (brand === 'All' || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="mx-auto mb-10 max-w-6xl px-4">
      <MobileFilter
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        category={category}
        setCategory={setCategory}
        handleCategoryChange={handleCategoryChange}
        handleBrandChange={handleBrandChange}
      />

      <div className="flex gap-8">
        <FilterSection
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          handleCategoryChange={handleCategoryChange}
          handleBrandChange={handleBrandChange}
        />

        {loading ? (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mt-10 grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-7 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          </div>
        ) : filteredData?.length > 0 ? (
          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="mt-10 grid grid-cols-2 items-stretch gap-2 md:grid-cols-3 md:gap-7 lg:grid-cols-4">
                {filteredData
                  ?.slice(page * 8 - 8, page * 8)
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
              <Pagination
                pageHandler={pageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />
            </div>
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center md:h-[600px] md:w-[900px]">
            <Lottie animationData={notfound} className="w-[500px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
