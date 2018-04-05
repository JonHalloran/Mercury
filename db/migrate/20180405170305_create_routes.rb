class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
    add_index(:routes, :user_id)
  end
end
