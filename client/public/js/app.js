// Manifest for all JS code

fetchJobsData().then(result => {
  const { jobPositions } = result;
  renderPositionSnippets(jobPositions);
});
