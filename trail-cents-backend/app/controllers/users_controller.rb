class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: {id: user.id, username: user.username, email: user.email, points: user.points}, jwt: token}
    else
            render json: {errors: user.errors.full_messages}, :status => 500
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user && params[:rewardId]
            reward = Reward.find_by(id: params[:rewardId])
            if reward
                if user.points > reward.cost && user.update(points: user.points - reward.cost)
                    render json: user
                else
                    render json: {errors: ["You do not have enough points to purchase this item."]}, :status => 500
                end
            else
                render json: {errors: ["Couldn't find that reward"]}, :status => 500
            end
        elsif user && params[:eventId]
            event = Event.find_by(id: params[:eventId])
            if event && user.update(points: user.points+event.duration)
                render json: user
            else
                render json: {errors: ["Couldn't find that event"]}, :status => 500
            end
        else
            render json: {errors: ["Couldn't find that user"]}, :status => 500
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end 
