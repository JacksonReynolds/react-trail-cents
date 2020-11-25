class RewardsController < ApplicationController
    def index
        render json: Reward.all
    end
end
