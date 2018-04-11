class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :run_id, null: false

      t.timestamps
    end
    add_index(:comments, :run_id)
  end
end
