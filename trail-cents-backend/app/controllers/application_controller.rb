class ApplicationController < ActionController::API
    def encode_token(payload)
        JWT.encode(payload, ENV['SECRET'])
      end
    
      def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          # headers: { 'Authorization': 'Bearer <token>' }
          begin
            JWT.decode(token, ENV['SECRET'], true, algorithm: 'HS256')
            # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
          rescue JWT::DecodeError
            nil
          end
        end
      end

      def auth_header
        request.headers['Authorization']
      end
end
