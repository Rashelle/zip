// Manifest for execution JS code

fetchJobsData().then(result => {
  const { jobPositions } = result;
  renderPositionSnippets(jobPositions);
});
