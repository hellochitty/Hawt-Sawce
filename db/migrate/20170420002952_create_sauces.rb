class CreateSauces < ActiveRecord::Migration[5.0]
  def change
    create_table :sauces do |t|
      t.string :name, null: false
      t.text :description
      t.integer :scoville_units
      t.string :image_url, null: false
      t.integer :company_id, null: false
      t.timestamps
    end

    add_index "sauces", ["name", "company_id"], :unique => true
  end
end
