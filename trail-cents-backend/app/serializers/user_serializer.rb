class UserSerializer < ActiveModel::Serializer
  attributes :username, :points, :email
end
