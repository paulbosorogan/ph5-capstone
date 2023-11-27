class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    wrap_parameters format: []

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def create 
    user = User.new(user_params)

    if user.save
        UserMailer.with(user: user).welcome_email.deliver_now

        session[:user_id] = user.id
        render json: user, status: :created 
    else  
        render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
    end
   end

    private 

    def user_params 
        params.permit(:name, :phone, :address, :email, :password, :password_confirmation)
    end
end
