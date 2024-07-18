export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        className="w-8 h-8 text-primary animate-bounce"
      >
        <polygon
          fill="currentColor"
          fillRule="evenodd"
          points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4"
        />
      </svg>
    </div>
  );
};
