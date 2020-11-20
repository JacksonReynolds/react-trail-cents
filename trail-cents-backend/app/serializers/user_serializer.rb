class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :points, :email
end
