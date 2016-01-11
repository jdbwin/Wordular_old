class CreateDefinitions < ActiveRecord::Migration
  def change
    create_table :definitions do |t|
      t.references :word, index: true, foreign_key: true
      t.string :part_of_speech
      t.text :definition
      t.timestamps null: false
    end
  end
end
