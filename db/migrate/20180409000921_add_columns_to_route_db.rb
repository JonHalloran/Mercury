class AddColumnsToRouteDb < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :response, :img_url
    add_column :routes, :lat, :float
    add_column :routes, :log, :float
    add_column :routes, :elevation, :float
    add_column :routes, :distance, :float
    add_column :routes, :origin, :string
  end
end
