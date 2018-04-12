export const selectUserRoutes = (state, userId) =>
  Object.values(state.entities.routes).filter(
    route => (route.user_id = userId)
  );

export const selectUserRuns = (state, userId) =>
  Object.values(state.entities.runs).filter(run => (run.user_id = userId));

export const activityFeed = (state, userId) => {
  let runs = selectUserRuns(state, userId);
  let routes = selectUserRoutes(state, userId);
  let activityArray = [];

  activityArray = activityArray.concat(runs.map(run => [run.date, "RUN", run]));
  activityArray = activityArray.concat(
    routes.map(route => [route.created_at.slice(0, 10), "ROUTE", route])
  );
  return activityArray.sort((a, b) => activityFeedSort(a, b));
};

const activityFeedSort = function(a, b) {
  return a[0] === b[0] ? 0 : a[0] > b[0] ? -1 : 1;
};
