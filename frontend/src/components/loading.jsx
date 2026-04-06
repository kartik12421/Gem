export const LoadingSpinner = () => {
  return (
    <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
  );
};

export const LoadingBig = () => {
  return (
    <div className="mx-auto mt-[300px] flex w-[200px] items-center justify-center space-x-2">
      <div className="h-8 w-8 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-white"></div>
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-white"></div>
    </div>
  );
};
