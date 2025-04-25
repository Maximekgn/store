import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-black mb-2"></div>
      <p className="text-lg font-medium">Loading products...</p>
    </div>
  );
};

export default Loading;