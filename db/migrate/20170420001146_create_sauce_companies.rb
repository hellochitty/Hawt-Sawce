class CreateSauceCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :sauce_companies do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
