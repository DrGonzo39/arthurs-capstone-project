class VenuesController < ApplicationController
    skip_before_action :authorize, only: :create 

    def index 
        venues = Venue.all
        render json: venues 
    end

    def show 
        venue = Venue.find_by(id: params[:id])
        render json: venue
    end

    def create
        venue = Venue.create!(venue_params)
        render json: venue, status: :created 
    end

    private

    def venue_params
        params.permit(:name, :location)
    end
end
