class AddRequestColumnToRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :request, :string
  end
end
