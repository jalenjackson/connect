class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :price
      t.string :city
      t.string :state
      t.string :phone
      t.string :email
      t.string :comments
      t.string :category
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
