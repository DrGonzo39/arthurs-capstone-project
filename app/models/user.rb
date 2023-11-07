class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true 
    validates :bio, length: { maximum: 150 }
    validates :type, presence: true, inclusion: { in: %w[Promoter Goer], message: "must be either Promoter or Goer"}
end
