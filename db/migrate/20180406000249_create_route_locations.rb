class CreateRouteLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :route_locations do |t|
      t.integer :route_id, null: false
      t.integer :order, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false


      t.timestamps
    end
    add_index(:route_locations, :route_id)
  end
end
