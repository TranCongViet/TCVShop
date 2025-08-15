import { getData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  // const {categoryOnlyData} = getData()
  const navigate = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, 'category');

  return (
    <div className="bg-[#101829]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-7 md:justify-around">
        {categoryOnlyData?.slice(0, 5).map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="cursor-pointer rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-3 py-1 text-white uppercase"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
