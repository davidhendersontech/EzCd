class CreateDonutsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t| 
      t.string :name 
      t.string :flavor 
      t.boolean :glitter
    end
  end
end
