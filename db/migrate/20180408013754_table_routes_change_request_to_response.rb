class TableRoutesChangeRequestToResponse < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :request, :response
  end
end
