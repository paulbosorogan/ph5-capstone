class ApplicationController < ActionController::API
include ActionController::Cookies
before_action :authorize    

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

def authorize 
    @curent_user = User.find_by(id: session[:user_id])
    render json: { errors: "Not authorized"}, status: :unauthorized unless @curent_user
end

def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end


end
