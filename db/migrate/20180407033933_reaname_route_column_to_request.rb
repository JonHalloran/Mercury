class ReanameRouteColumnToRequest < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :start_place_id, :request
  end
end
