class ItemsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index 
        items = Item.all 
        render json: items, status: :ok
    end

    def create 
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def update 
        item = Item.find(params[:id])
        item.update!(item_params_update)
        render json: item, status: :ok
    end

    def destroy 
        item = Item.find(params[:id])
        item.destroy 
        render json: item
    end
    
    private 
    def item_params
        params.permit(:name, :description, :category, :price)
    end

    def item_params_update
        params.permit(:id, :name, :description, :price)
    end
end
