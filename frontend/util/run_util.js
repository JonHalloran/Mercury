export const retrieveRuns = () =>
  $.ajax({
    url: `api/runs/`,
    method: "GET"
  });

export const retrieveRun = runId =>
  $.ajax({
    url: `api/runs/${runId}`,
    method: "GET"
  });

export const createRun = run =>
  $.ajax({
    url: `api/runs/`,
    method: "POST",
    data: { run }
  });
