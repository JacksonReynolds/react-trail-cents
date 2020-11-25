class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :points, :email
end
