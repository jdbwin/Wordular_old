class API::V1::PopularWordsController < ApplicationController

  def index
    @popular_words = Word.find_each do |word|
      word.word_bank_entries.length > 0
    end

    render json: @popular_words
  end

end
