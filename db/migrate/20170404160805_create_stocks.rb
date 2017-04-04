class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :stocks, :name, unique: true
    add_index :stocks, :symbol, unique: true
  end
end
