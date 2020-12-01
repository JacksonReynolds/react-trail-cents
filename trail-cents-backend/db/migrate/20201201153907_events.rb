class Events < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :start, :string
    change_column :events, :end, :string
  end
end
