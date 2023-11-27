class Order < ApplicationRecord
    has_many :order_items
    has_many :items, through: :order_items
    
    belongs_to :user

    def total_price 
      sum = 0 
      self.order_items.each do |order_item|
        sum += order_item.quantity * order_item.item.price
      end
      sum
    end

    # def item_count 
    #     self.order_items.count
    # end

    def item_details
        array = []

        self.order_items.each do |order_item| 
         array << "#{order_item.item.name} ... #{order_item.quantity} x $#{order_item.item.price}"
        end
        array
    end
end
