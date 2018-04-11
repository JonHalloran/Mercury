export const fetchComments = runId =>
  $.ajax({
    url: `api/runs/${runId}/comments`,
    method: "GET"
  });

export const createComment = (runId, comment) =>
  $.ajax({
    url: `api/runs/${runId}/comments`,
    method: "POST",
    data: comment
  });
