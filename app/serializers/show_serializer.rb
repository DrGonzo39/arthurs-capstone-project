class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :date, :artist_id, :venue_id, :artist
  belongs_to :artist
  belongs_to :venue 
end
