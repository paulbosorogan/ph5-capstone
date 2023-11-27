class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index 
        orders = Order.all 
        render json: orders
    end

    def create 
        order = Order.create!(user_id: @curent_user.id)
            
            params[:order_items_param].each do |item|
                OrderItem.create!(order_id: order.id, item_id: item[:item_id], quantity: item[:quantity] )
            end
            OrderMailer.with(user: @curent_user, order: order).order_placed.deliver_now
    
        render json: order, status: :created


    end

    private 
    def order_params 
        params.permit(:order_items_param)
    end
end
# should I add created_at for date? A: no, you have timestamps