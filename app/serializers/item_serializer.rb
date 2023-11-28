class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :price
end
