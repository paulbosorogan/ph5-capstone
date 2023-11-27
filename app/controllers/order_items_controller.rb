class OrderItemsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        order_items = OrderItem.all 
        render json: order_items, status: :ok
    end
end
