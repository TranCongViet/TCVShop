const CarouselSkeleton = () => {
  return (
    <div className="-z-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 lg:py-0">
      <div className="flex h-[600px] animate-pulse flex-col items-center justify-center gap-10 px-4 md:my-0 md:flex-row">
        {/* Text skeleton */}
        <div className="space-y-3 self-start md:space-y-6 md:self-center">
          <div className="h-4 w-64 rounded bg-gray-600"></div>
          <div className="h-10 w-[370px] rounded bg-gray-500 md:w-[500px]"></div>
          <div className="h-20 w-[370px] rounded bg-gray-700 md:w-[500px]"></div>
          <div className="h-10 w-32 rounded bg-gray-600"></div>
        </div>
        {/* Image skeleton */}

        <div className="h-[350px] w-[350px] rounded-full bg-gray-600 md:h-[550px] md:w-[550px]"></div>
      </div>
    </div>
  );
};
export default CarouselSkeleton;
