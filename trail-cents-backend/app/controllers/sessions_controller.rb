class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            render json: user
        else
            render json: {errors: ["Incorrect email/password combo"]}
        end
    end

    def destroy
        cookies.destroy(:jwt)
    end
end