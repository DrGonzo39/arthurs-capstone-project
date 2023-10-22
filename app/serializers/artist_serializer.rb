class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :members, :image 
  has_many :shows
  has_many :venues 
end
