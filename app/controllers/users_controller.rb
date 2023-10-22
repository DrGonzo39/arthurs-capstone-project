class UsersController < ApplicationController
    skip_before_action :authorize, only: :create 

    def create
        case params[:type]

        when 'Promoter'
            user = Promoter.create!(user_params)

        when 'Goer'
            user = Goer.create!(user_params)
        end
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    def show
        render json: @current_user
    end

    private 

    def user_params
        params.permit(:username, :type, :password, :password_confirmation)
    end
end
