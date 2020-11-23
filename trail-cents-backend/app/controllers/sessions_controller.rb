class SessionsController < ApplicationController
    def create
        user = User.find_by(params[:email])
        if user && user.authenticate(params[:password])
            created_jwt = issue_token({id: user.id})
            cookies.signed[:jwt] = {value: created_jwt, httponly: true}
            render json: UserSerializer.new(user)
        elsif user
            render json: {errors: user.errors.full_messages}
        else
            render 
        end
    end

    def destroy
        cookies.destroy(:jwt)
    end
end