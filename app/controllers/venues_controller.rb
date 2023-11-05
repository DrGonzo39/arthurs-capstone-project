class VenuesController < ApplicationController 
    skip_before_action :authorize, only: :index

    def index 
        venues = Venue.all
        render json: venues 
    end

end
