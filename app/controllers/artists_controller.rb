class ArtistsController < ApplicationController

    def index
        artists = Artist.all 
        render json: artists 
    end

    def show
        artist = Artist.find_by(id: params[:id])
        render json: artist 
    end

    def create
        artist = Artist.create!(artist_params)
        render json: artist, status: :created 
    end

    private

    def artist_params
        params.permit(:name, :genre, :members, :image)
    end
    
end
