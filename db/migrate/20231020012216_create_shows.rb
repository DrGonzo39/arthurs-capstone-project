class CreateShows < ActiveRecord::Migration[7.1]
  def change
    create_table :shows do |t|
      t.belongs_to :artist, null: false, foreign_key: true 
      t.belongs_to :venue, null: false, foreign_key: true 
      t.string :title
      t.integer :rating
      t.string :date

      t.timestamps
    end
  end
end
