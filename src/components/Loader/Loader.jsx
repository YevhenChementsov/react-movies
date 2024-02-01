import RiseLoader from 'react-spinners/RiseLoader';

const Loader = () => {
  return (
    <RiseLoader
      aria-label="Loading Spinner"
      color="#f00"
      cssOverride={{
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      margin={5}
      size={20}
    />
  );
};

export default Loader;
