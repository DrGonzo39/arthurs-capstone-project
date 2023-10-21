class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true 
    validates :bio, length: { maximum: 50 }
end
