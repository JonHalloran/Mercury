class RemoveTotalDistanceFromUserTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :total_distance
  end
end
