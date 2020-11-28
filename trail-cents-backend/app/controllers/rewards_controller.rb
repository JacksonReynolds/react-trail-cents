class RewardsController < ApplicationController
    def index
        render json: Reward.all
    end

    def update
        reward = Reward.find_by(id: params[:id])
        if reward && reward.num_available > 0
            reward.num_available -= 1
            reward.save
            render json: reward
        else
            render json: {errors: ["Couldn't find that reward"]}
        end
    end
end
