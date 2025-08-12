const FeaturesSkeleton = () => {
  return (
    <div className="animate-pulse py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
              <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSkeleton