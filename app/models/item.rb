class Item < ApplicationRecord
    validates :name, :description, :price, :category, presence: true 
    
    has_many :order_items
    has_many :orders, through: :order_items
end
