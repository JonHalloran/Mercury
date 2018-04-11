export const getRoutes = routeHash => {
  let url = "api/routes/?&";
  const keys = Object.keys(routeHash);
  debugger;
  keys.forEach(key => {
    url += `&${key}=${routeHash[key]}`;
  });
  return $.ajax({
    url: url,
    method: "GET"
  });
};

export const getRoute = routeId =>
  $.ajax({
    url: `api/routes/${routeId}`,
    method: "GET"
  });

export const createRoute = route =>
  $.ajax({
    url: `api/routes/`,
    method: "POST",
    data: { route }
  });
