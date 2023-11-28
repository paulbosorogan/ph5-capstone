class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total_price, :item_details

  has_many :order_items
end
