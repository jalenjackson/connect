class AddNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_search_term_title, :string
    add_column :users, :last_search_term_location, :string
  end
end
