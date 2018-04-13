
@routes.each do |route|
  json.routes do
    json.set! route.id do
      json.partial! 'api/routes/route', route: route
    end
  end

  json.users do
    json.set! route.creator.id do
      json.partial! 'api/users/user', user: route.creator
    end
  end
end
