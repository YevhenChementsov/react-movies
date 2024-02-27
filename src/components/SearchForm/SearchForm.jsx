import { PropTypes } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const emptyQuery = query.trim() === '';

  const updateQuery = ({ target: { value } }) =>
    setSearchParams(value === '' ? {} : { query: value.toLowerCase() });

  const handleSubmit = e => {
    e.preventDefault();
    if (emptyQuery) return;

    onSubmit(query);
  };

  return (
    <>
      <form autoComplete="off" className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Searching for..."
          autoFocus
          className="w-[clamp(176px,61vw,23.5rem)] rounded-lg border border-solid border-black px-3 py-1 outline-offset-0 outline-red-400"
          value={query}
          onChange={updateQuery}
        />
        <button
          type="submit"
          className={`w-[clamp(76px,12vw,96px)] rounded-lg border border-solid border-transparent ${
            emptyQuery
              ? 'cursor-not-allowed bg-gray-200'
              : 'bg-red-400 px-2 py-1 text-white transition-colors ease-in-out hover:border-solid hover:border-red-400 hover:bg-white hover:text-red-400'
          }`}
          disabled={emptyQuery}
        >
          Search
        </button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
