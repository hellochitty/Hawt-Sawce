class AddAttachmentImageToSauces < ActiveRecord::Migration
  def self.up
    change_table :sauces do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :sauces, :image
  end
end
