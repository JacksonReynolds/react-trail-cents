class ApplicationController < ActionController::API
  def encode_token(payload)
    exp = Time.now.to_i+3600 # token will expire in one hour
    payload["exp"] = exp
    JWT.encode(payload, ENV['secret'])
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # headers: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, ENV['secret'], true, algorithm: 'HS256')
        # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        {errors: ["Invalid token, try loggin in with email and password"]}
      rescue JWT::ExpiredSignature
        {errors: ["Expired session, please log back in"]}
      end
    end
  end

  def auth_header
    request.headers['Authorization']
  end

  def token_response
    if decoded_token && decoded_token.length > 1
      user_id = decoded_token[0]['user_id']
      user = User.find_by(id: user_id)
    else
      errors = decoded_token
    end
  end
end
