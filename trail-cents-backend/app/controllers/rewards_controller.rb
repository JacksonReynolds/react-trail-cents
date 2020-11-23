class RewardsController < ApplicationController
    def index
        render json: RewardSerializer.new(Reward.all)
    end
end
