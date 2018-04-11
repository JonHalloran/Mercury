json.run do
  json.partial! 'api/runs/run', run: @run
end


json.route do
  json.partial! 'api/routes/route', route: @run.route
end

json.user do
  json.partial! 'api/users/user', user: @run.user
end
