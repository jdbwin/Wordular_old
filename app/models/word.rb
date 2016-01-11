class Word < ActiveRecord::Base
  has_many :definitions, dependent: :destroy
  has_many :word_bank_entries, dependent: :destroy
end
