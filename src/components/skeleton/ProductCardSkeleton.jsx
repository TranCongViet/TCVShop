const ProductCardSkeleton = () => (
  <div className="relative h-max animate-pulse rounded-2xl border border-gray-100 bg-white p-2">
    <div className="mb-2 aspect-square w-full rounded-xl bg-gray-200" />
    <div className="mb-2 h-5 w-3/4 rounded bg-gray-300" />
    <div className="mb-2 h-4 w-1/2 rounded bg-gray-200" />
    <div className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-gray-300 px-3 py-2">
      <div className="h-6 w-6 rounded bg-gray-400" />
      <div className="hidden h-5 w-20 rounded bg-gray-400 lg:block" />
    </div>
  </div>
);

export default ProductCardSkeleton;
