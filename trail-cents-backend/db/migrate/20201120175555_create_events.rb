class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.decimal :lat
      t.decimal :long
      t.text :desc
      t.date :date
      t.string :category
      t.time :start
      t.time :end
      t.decimal :duration
      t.string :img_src

      t.timestamps
    end
  end
end
