class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: {errors: user.errors.full_messages}
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
                    render json: {errors: ["You do not have enough points to purchase this item."]}
                end
            else
                render json: {errors: ["Couldn't find that reward"]}
            end
        elsif user && params[:eventId]
            event = Event.find_by(id: params[:eventId])
            if event && user.update(points: user.points+event.duration)
                render json: user
            else
                render json: {errors: ["Couldn't find that event"]}
            end
        else
            render json: {errors: ["Couldn't find that user"]}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end 
