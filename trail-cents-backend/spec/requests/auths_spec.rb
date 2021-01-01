require 'rails_helper'

RSpec.describe "Auth", type: :request do
  describe "POST /auth" do
    context 'w/ a valid token' do
      before do
        @user = User.create(username: 'user', password: 'pw', password_confirmation: 'pw', email: 'me@email.com')
        payload = {user_id: @user.id, exp: Time.now.to_i+3600}
        @token = JWT.encode(payload, ENV['secret'])
        headers = {'accepts': 'application/json', "Authorization": "Bearer #{@token}"}

        post '/auth', :headers => headers
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end

      it 'returns corresponding user data from token' do
        user_data = JSON.parse(response.body)
        expect(user_data).to be
        expect(user_data["id"]).to eq(@user.id)
      end
    end
  end
end
