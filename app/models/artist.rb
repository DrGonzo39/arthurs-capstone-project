class Artist < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows 
    validates :name, presence: true, uniqueness: true
    validates :genre, :members, presence: true 
end
