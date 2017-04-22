class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.integer :overall_rating, null: false
      t.integer :heat_rating, null: false
      t.text :comment
      t.integer :user_id, null: false
      t.integer :sauce_id, null: false

      t.timestamps
    end

    add_index :checkins, :user_id
    add_index :checkins, :sauce_id
  end
end
