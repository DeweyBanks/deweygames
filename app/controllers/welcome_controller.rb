class WelcomeController < ActionController::Base
  before_filter :authenticate_user!
  include SessionsHelper
  helper_method :current_user, :logged_in?, :authenticate

 def quiz

 end

protected
  def authenticate_user!
    unless logged_in?
      redirect_to login_path, :notice => 'You must be signed in to take the quiz'
    end
  end

end
