class ArtistsController < ApplicationController

    def index
        artists = Artist.all 
        render json: artists 
    end

    def show
        artist = Artist.find_by(id: params[:id])
        render json: artist 
    end
end
