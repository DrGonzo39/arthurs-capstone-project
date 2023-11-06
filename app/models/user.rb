class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true 
    validates :bio, length: { maximum: 50 }
    validates :type, inclusion: { in: %w[Promoter Goer], message: "must be either Promoter or Goer"}, presence: true 
end
