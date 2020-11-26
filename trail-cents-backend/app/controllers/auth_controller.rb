class AuthController < ApplicationController

    def create
        render json: current_user if current_user
        user = User.find_by(email: login_params[:email])
        if user && user.authenticate(login_params[:password])
            token = encode_token(user.id)
            render json: {user: user, jwt: token}
        else
            render json: {errors: ["Incorrect email/password combo"]}
        end
    end

    private

    def login_params
        params.require(:user).permit(:email, :password)
    end
end