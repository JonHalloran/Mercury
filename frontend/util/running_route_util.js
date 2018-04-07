export const getRoutes = () => (
    $.ajax({
        url: `api/routes`,
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