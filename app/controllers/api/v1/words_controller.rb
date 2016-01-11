class API::V1::WordsController < ApplicationController

  def index
    @words = Word.includes(:definitions)
    render json: @words.to_json(include: :definitions) 
  end

  def create
    @word = Word.new(
      word: params[:word],
    )
    render json: @word

    if @word.save

      params[:definitions].each do |definition|

        @definition = Definition.new(
          part_of_speech: definition[1][1],
          definition: definition[1][0],
          word_id: @word.id
        )


        @definition.save

      end

      @word_bank_entry = WordBankEntry.new(
        user_id: current_user.id,
        word_id: @word.id
      )


      @word_bank_entry.save

    end

  end

  def popular_words

    @popular_words = Word.joins(:word_bank_entries).group(:word).count.first(5)

    render json: @popular_words.to_json
  end

end
