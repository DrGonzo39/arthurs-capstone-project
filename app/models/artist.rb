class Artist < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows 
    validates :name, presence: true, uniqueness: true
    validates :genre, :members, presence: true 
    validates :image, format: { with: %r{\.jpg|png|gif}i, message: 'must be a url for a jpg, png, or gif.' }
end
