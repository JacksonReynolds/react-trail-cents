class RewardsController < ApplicationController
    def index
        render json: rewards
    end
end
