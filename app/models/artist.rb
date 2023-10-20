class Artist < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows 
end
