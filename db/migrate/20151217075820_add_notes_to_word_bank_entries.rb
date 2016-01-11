class AddNotesToWordBankEntries < ActiveRecord::Migration
  def change
    add_column :word_bank_entries, :notes, :string
  end
end
