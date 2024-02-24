export const movieGenres = genres => {
  return genres.map(({ name }) => name).join(', ');
};
