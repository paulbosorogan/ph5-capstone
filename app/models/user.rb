class User < ApplicationRecord
    has_secure_password

    validates :name, :email, :address, :phone,  presence: true 
    validates :email, :phone, uniqueness: true
    validates :my_email_attribute, email: {mode: strict, require_fqdn: true}

    validates :phone, phone: true, allow_blank: false, uniqueness: true
    before_save :format_phone

    has_many :orders, dependent: :destroy

    def format_phone 
        self.phone = Phonelib.parse(phone).e164
    end
end
