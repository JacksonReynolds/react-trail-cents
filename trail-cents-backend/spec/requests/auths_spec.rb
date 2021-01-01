require 'rails_helper'

RSpec.describe "Auth", type: :request do
  describe "POST /auth" do
    context 'w/ a valid token' do
      before do
        @user = User.create(username: 'user', password: 'pw', password_confirmation: 'pw', email: 'me@email.com')
        payload = {user_id: @user.id, exp: Time.now.to_i+3600}
        token = JWT.encode(payload, ENV['secret'])
        headers = {'accepts': 'application/json', "Authorization": "Bearer #{token}"}

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

    context 'w/ invalid token' do
      before do
        headers = {'accepts': 'application/json', "Authorization": "Bearer FakeToken"}

        post '/auth', :headers => headers
      end

      it 'returns unsuccessful' do
        expect(response).to have_http_status(:error)
      end

      it 'returns errors' do
        expect(response.body).to include("Invalid token, try logging in with email and password")
      end
    end

    context 'w/ expired token' do
      before do
        @user = User.create(username: 'user', password: 'pw', password_confirmation: 'pw', email: 'me@email.com')
        payload = {user_id: @user.id, exp: Time.now.to_i-1}
        token = JWT.encode(payload, ENV['secret'])
        headers = {'accepts': 'application/json', "Authorization": "Bearer #{token}"}

        post '/auth', :headers => headers
      end

      it 'returns unsuccessful' do
        expect(response).to have_http_status(:error)
      end

      it 'returns errors' do
        expect(response.body).to include("Expired session, please log back in")
      end
    end

    context 'w/ invalid login credentials' do
      before do
        invalid_user_params = {user: {email: 'not@valid.com', password: 'nope'}}

        post '/auth', :params => invalid_user_params
      end

      it 'returns unsuccessful' do
        expect(response).to have_http_status(:error)
      end

      it 'returns errors' do
        expect(response.body).to include("Incorrect email/password combo")
      end
    end
  end
end
