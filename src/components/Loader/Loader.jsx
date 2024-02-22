import RiseLoader from 'react-spinners/RiseLoader';

const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <RiseLoader aria-label="Loading Spinner" color="#f00" />
    </div>
  );
};

export default Loader;
