class UserController < ApplicationController
  def last_search_term
    if current_user
      current_user.last_search_term_title = params[:term]
      current_user.save
    end
  end

  def last_search_term_city
    if current_user
      current_user.last_search_term_location = params[:term]
      current_user.save
    end
  end
end