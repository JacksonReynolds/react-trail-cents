class SessionsController < ApplicationController
    def create
        user = User.find_by(params[:email])
        if user && user.authenticate(params[:password])
            created_jwt = issue_token({id: user.id})
            cookies.signed[:jwt] = {value: created_jwt, httponly: true}
            render json: UserSerializer.new(user)
        else 
            render json: {error: "Password/Email combo did not meet our records. Please enter valid login credentials"}
        end
    end
end