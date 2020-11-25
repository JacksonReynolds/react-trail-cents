class AuthController < ApplicationController
    def create
        user = User.find_by(email: login_params[:email])
        if user && user.authenticate(params[:user][:password])
            binding.pry
            token = encode_token(user.id)
            render json: {user: user, jwt: token}
        else
            render json: {errors: ["Incorrect email/password combo"]}
        end
    end

    def destroy
        cookies.destroy(:jwt)
    end

    private

    def login_params
        params.require(:user).permit(:email, :password)
    end
end