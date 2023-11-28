class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :item_name, :item_id, :item_price, :quantity

  belongs_to :order

  def item_name 
    object.item.name
  end

  def item_price 
    object.item.price
  end

end
