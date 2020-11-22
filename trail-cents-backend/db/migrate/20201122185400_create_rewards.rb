class CreateRewards < ActiveRecord::Migration[6.0]
  def change
    create_table :rewards do |t|
      t.text :desc
      t.integer :cost
      t.integer :num_available

      t.timestamps
    end
  end
end
