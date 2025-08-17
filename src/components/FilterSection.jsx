import { getData } from '../context/DataContext';

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <div className="mt-10 hidden h-max rounded-md bg-gray-100 p-4 md:block">
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-md border-2 border-gray-400 bg-white p-2"
      />

      {/* category only data */}
      <h1 className="mt-5 mb-3 text-xl font-semibold">Category</h1>
      <select
        name=""
        id=""
        className="w-full rounded-md border-2 border-gray-200 bg-white p-2"
        value={category}
        onChange={handleCategoryChange}
      >
        {categoryOnlyData?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item?.toUpperCase()}
            </option>
          );
        })}
      </select>
      {/* brand only data */}
      <h1 className="mt-5 mb-3 text-xl font-semibold">Brand</h1>
      <select
        name=""
        id=""
        className="w-full rounded-md border-2 border-gray-200 bg-white p-2"
        value={brand}
        onChange={handleBrandChange}
      >
        {brandOnlyData?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item?.toUpperCase()}
            </option>
          );
        })}
      </select>
      {/* price range  */}
      <h1 className="mt-5 mb-3 text-xl font-semibold">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          name=""
          id=""
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="transition-all"
        />
      </div>
      <button
        className="mt-5 cursor-pointer rounded-md bg-red-500 px-3 py-1 text-white"
        onClick={() => {
          setSearch('');
          setCategory('All');
          setBrand('All');
          setPriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
