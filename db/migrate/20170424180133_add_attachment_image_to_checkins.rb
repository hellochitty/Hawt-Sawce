class AddAttachmentImageToCheckins < ActiveRecord::Migration
  def self.up
    change_table :checkins do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :checkins, :image
  end
end
