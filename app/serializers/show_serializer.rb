class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :date, :artist_id, :venue_id
  belongs_to :artist
  belongs_to :venue 
end
