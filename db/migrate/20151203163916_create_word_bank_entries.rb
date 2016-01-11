class CreateWordBankEntries < ActiveRecord::Migration
  def change
    create_table :word_bank_entries do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :word_id
      t.timestamps null: false
    end
  end
end
