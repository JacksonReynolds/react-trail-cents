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
        JWT.decode(token, ENV['secret'], true, algorithm: 'HS256')[0]
        # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        {errors: ["Invalid token, try logging in with email and password"]}
      rescue JWT::ExpiredSignature
        {errors: ["Expired session, please log back in"]}
      end
    end
  end

  def auth_header
    request.headers['Authorization']
  end

  def token_response
    if user_id = decoded_token['user_id']
      user = User.find_by(id: user_id)
    else
      errors = decoded_token
    end
  end

  def token_present?
    !!auth_header
  end
end
