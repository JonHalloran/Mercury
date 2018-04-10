class AddDateToRun < ActiveRecord::Migration[5.1]
  def change
    add_column :runs, :date, :date, null: false
  end
end
