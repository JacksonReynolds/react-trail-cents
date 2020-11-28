class AuthController < ApplicationController

    def create
        if current_user
            render json: current_user
        else
            user = User.find_by(email: login_params[:email])
            if user && user.authenticate(login_params[:password])
                payload = {user_id: user.id}
                token = encode_token(payload)
                render json: {user: {id: user.id, username: user.username, email: user.email, points: user.points}, jwt: token}
            else
                render json: {errors: ["Incorrect email/password combo"]}
            end
        end
    end

    private

    def login_params
        params.require(:user).permit(:email, :password)
    end

end