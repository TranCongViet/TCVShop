const MidBannerSkeleton = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div className="animate-pulse max-w-7xl mx-auto md:rounded-2xl pt-28 bg-gray-300 h-[550px] md:h-[600px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-400 rounded w-96 mx-auto"></div>
          <div className="h-6 bg-gray-400 rounded w-80 mx-auto"></div>
          <div className="h-10 bg-gray-400 rounded w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default MidBannerSkeleton