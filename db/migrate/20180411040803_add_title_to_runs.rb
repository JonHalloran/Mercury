class AddTitleToRuns < ActiveRecord::Migration[5.1]
  def change
    add_column :runs, :name, :string
  end
end
