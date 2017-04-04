class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, presence: true, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :money, default: 1_000_000, null: false
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :session_token
  end
end
