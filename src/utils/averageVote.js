export const averageVote = vote => {
  return vote.toFixed(1) > 0 ? `${vote.toFixed(1)}/10` : 'No grades yet';
};
