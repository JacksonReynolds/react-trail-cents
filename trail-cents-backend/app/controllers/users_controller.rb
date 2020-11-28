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
        if user
            reward = Reward.find_by(id: params[:rewardId])
            if reward
                if user.points > reward.cost
                    binding.pry
                    user.update(points: user.points - reward.cost)
                    reward.update(num_availabe: reward.num_availabe-1)
                    render json: user
                else
                    render json: {errors: ["You do not have enough points to purchase this item."]}
                end
            else
                render json: {errors: ["Couldn't find that reward"]}
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
