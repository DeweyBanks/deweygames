class WelcomeController < ActionController::Base
  before_filter :authenticate_user!
  include SessionsHelper
  helper_method :current_user, :logged_in?, :authenticate

 def quiz

 end

protected
  def authenticate_user!
    if logged_in?
      super
    else
      redirect_to login_path, :notice => 'You must be signed in to take the quiz'
      ## if you want render 404 page
      ## render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
  end
end

end
