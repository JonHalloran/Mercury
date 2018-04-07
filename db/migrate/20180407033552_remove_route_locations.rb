class RemoveRouteLocations < ActiveRecord::Migration[5.1]
  def change
    drop_table :route_locations
  end
end
