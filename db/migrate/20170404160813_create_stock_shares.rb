class CreateStockShares < ActiveRecord::Migration[5.0]
  def change
    create_table :stock_shares do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.integer :amount, default: 0, null: false
      t.timestamps
    end
    add_index :stock_shares, :user_id
  end
end
