import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen rounded-2xl bg-white px-4 pb-4 shadow-lg md:px-0">
      <div className="mx-auto my-10 max-w-6xl">
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:p-6">
        <div className="w-full">
          <div className="h-[400px] w-full animate-pulse rounded-2xl bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-300"></div>
          <div className="h-5 w-1/2 animate-pulse rounded bg-gray-300"></div>
          <div className="h-7 w-1/3 animate-pulse rounded bg-gray-300"></div>
          <div className="h-50 w-full animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
          <div className="h-12 w-40 animate-pulse rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
