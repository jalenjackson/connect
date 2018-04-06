class MainController < ApplicationController


  before_action :force_json, only: :search

  def index; end

  def search
    @items = Item.ransack(title_cont: params[:q], city_cont: params[:city], category_cont: params[:category]).result(distinct: true).limit(5)
  end

  private

  def force_json
    request.format = :json
  end
end