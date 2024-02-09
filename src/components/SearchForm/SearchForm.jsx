import { PropTypes } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQuery = ({ target: { value } }) =>
    setSearchParams(value === '' ? {} : { query: value.toLowerCase() });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <>
      <form autoComplete="off" className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus
          className="w-[clamp(176px,50vw,376px)] rounded-lg border border-solid border-black px-3 py-1 outline-offset-0 outline-red-400"
          value={query}
          onChange={updateQuery}
        />
        <button
          type="submit"
          className="w-[96px] rounded-lg border border-solid border-transparent bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400"
        >
          Search
        </button>
      </form>
      <h2 className="mt-2">
        Searching results for <b>{query}</b>:
      </h2>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
