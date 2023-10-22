class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image 
  has_many :shows
  has_many :artists 
end
