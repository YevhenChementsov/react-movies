import RiseLoader from 'react-spinners/RiseLoader';

const Loader = () => {
  return (
    <RiseLoader
      aria-label="Loading Spinner"
      color="#f00"
      cssOverride={{ display: 'flex', justifyContent: 'center' }}
      margin={5}
      size={20}
    />
  );
};

export default Loader;
