class API::V1::WordBankEntryController < ApplicationController

  def index
    render json: getEntries
  end

  def create
  end

  def getEntries
    entries = []
    current_user.word_bank_entries.each do |entry|
      word = Word.find(entry.word_id)
      word_entry = Hash.new
      word_entry[:word] = word
      word_entry[:definition] = word.definitions
      entries << word_entry
    end
    return entries
  end

end
