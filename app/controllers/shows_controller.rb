class ShowsController < ApplicationController

    def index
        shows = Show.all
        render json: shows 
    end

    def create 
        venue = Venue.find_by(id: params[:venue_id])
        show = venue.shows.create!(show_params)
        render json: show, status: :created
    end

    def update
        venue = Venue.find_by(id: params[:venue_id])
        show = venue.shows.find_by(id: params[:id])
        show.update!(show_params)
        render json: show 
    end

    def destroy
        show = Show.find_by(id: params[:id])
        show.destroy
        head :no_content 
    end

    private

    def show_params
        params.permit(:title, :date, :artist_id, :venue_id)
    end
end
