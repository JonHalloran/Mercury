class CreateRuns < ActiveRecord::Migration[5.1]
  def change
    create_table :runs do |t|
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.integer :duration, null: false

      t.timestamps
    end
  end
end
