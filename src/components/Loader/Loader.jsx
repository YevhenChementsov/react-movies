import RiseLoader from 'react-spinners/RiseLoader';

const Loader = () => {
  return (
    <RiseLoader
      aria-label="Loading Spinner"
      color="#f00"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh',
      }}
    />
  );
};

export default Loader;
