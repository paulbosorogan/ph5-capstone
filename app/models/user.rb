class User < ApplicationRecord
    has_secure_password

    validates :name, :email, :address, :phone,  presence: true 
    validates :email, uniqueness: true

    has_many :orders, dependent: :destroy
end
