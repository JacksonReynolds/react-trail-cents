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
      binding.pry
      expect(JSON.parse(response.body).length).to eq(@rewards.length)
    end
  end

  describe 'PATCH /rewards/:id' do
    
  end
end
