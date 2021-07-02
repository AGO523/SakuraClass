class CreateInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :informations do |t|
      t.string "title", null: false
      t.text "body", null: false
      t.string "user_name", null: false
      t.integer "user_id", null: false
      t.string "image"
      t.timestamps
    end
  end
end
