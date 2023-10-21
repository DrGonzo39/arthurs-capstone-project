class Show < ApplicationRecord
    belongs_to :artist 
    belongs_to :venue 
    validates :title, presence: true, uniqueness: true 
    validates :date, presence: true 
    validates :rating, length: { in: 1..10 } 
end
