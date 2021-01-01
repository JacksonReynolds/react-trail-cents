require 'rails_helper'

RSpec.describe "Rewards", type: :request do
  before do
    Reward.create([
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5},
      {desc: 'blah', num_available: 5}
    ])
    @rewards = Reward.all
  end

  describe "GET /rewards" do
    before do
      get '/rewards'
    end

    it 'returns successful' do
      expect(response).to have_http_status(:success)
    end

    it 'returns an array of reward records' do
      expect(JSON.parse(response.body).length).to eq(@rewards.length)
    end
  end

  describe 'PATCH /rewards/:id' do
    context 'w/ valid params' do
      before do
        patch "/rewards/1"
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end

      it 'reduces the number available of that reward' do
        reward = Reward.find_by(id: 1)
        expect(reward.num_available).to eq(4)
      end

      it 'returns updated reward data' do
        reward_data = JSON.parse(response.body)
        expect(reward_data).to be
        expect(reward_data['id']).to eq(1)
        expect(reward_data['num_available']).to eq(4)
      end
    end
  end
end
