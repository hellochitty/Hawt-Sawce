class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :checkin_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
      t.timestamps
    end

    add_index :comments, :checkin_id
    add_index :comments, :user_id
  end
end
