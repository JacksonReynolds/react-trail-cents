class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            render json: user
        elsif user
            render json: {errors: user.errors.full_messages}
        else
            render json: {errors: ["Incorrect email/password combo"]}
        end
    end

    def destroy
        cookies.destroy(:jwt)
    end
end