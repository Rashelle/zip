function fetchJobsData() {
  return new Promise(resolve => {
    fetch("/jobsData").then(response => {
      resolve(response.json());
    });
  });
}
