class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_search_term_title, :last_search_term_location, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_search_term_title, :last_search_term_location, :email, :password, :password_confirmation, :current_password)
  end
end