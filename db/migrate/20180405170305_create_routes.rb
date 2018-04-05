class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.text :start_place_id, null: false

      t.timestamps
    end
    add_index(:routes, :user_id)
    add_index(:routes, :start_place_id)
  end
end
