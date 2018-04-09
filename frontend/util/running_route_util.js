export const getRoutes = (routeHash) => (
    $.ajax({
        url: `api/routes/?name=${routeHash.name}&distance=${routeHash.distance}&dist_type=${routeHash.dist_type}`,
        method: "GET"
    })
);

export const getRoute = (routeId) => (
    $.ajax({
        url: `api/routes/${routeId}`,
        method: "GET"
    })
);

export const createRoute = (route) => (
    $.ajax({
        url: `api/routes/`,
        method: "POST",
        data: {route}
    })

);