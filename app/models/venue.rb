class Venue < ApplicationRecord
    has_many :shows
    has_many :artists, through: :shows 
    validates :name, :location, presence: true, uniqueness: true 
end
