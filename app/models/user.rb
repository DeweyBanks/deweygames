class User < ActiveRecord::Base
  has_secure_password
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true
  validates :admin, :inclusion => {:in => [true, false]}

  def is_admin?
    self.admin == true
  end
end
