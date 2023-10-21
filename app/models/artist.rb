class Artist < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows 
    validates :name, :genre, :members, presence: true, uniqueness: true
end
