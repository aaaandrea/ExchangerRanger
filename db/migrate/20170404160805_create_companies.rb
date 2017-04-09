class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.float :share_price, null: false

      t.timestamps
    end
    add_index :companies, :name, unique: true
    add_index :companies, :symbol, unique: true
  end
end
