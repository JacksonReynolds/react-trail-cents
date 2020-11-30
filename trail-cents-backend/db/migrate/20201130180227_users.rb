class Users < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :points, :decimal, default: 0.0
  end
end
