class UpdateSauces < ActiveRecord::Migration[5.0]
  def change
    change_column :sauces, :image_url, :string, :null => true
  end
end
