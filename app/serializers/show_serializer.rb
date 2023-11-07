class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :artist_id, :venue_id, :artist, :venue
  belongs_to :artist
  belongs_to :venue 
end
