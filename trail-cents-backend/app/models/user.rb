class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    has_secure_password
end
