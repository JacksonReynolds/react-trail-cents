require 'rails_helper'

RSpec.describe "Users", type: :request do
  before do
    @header = {'accepts': 'application/json'}
  end

  # test user creation request/response
  describe "POST /users" do
    context "w/ valid params" do
      before do
        valid_params = {user: {username: 'valid user', 
                               password: 'password',
                               password_confirmation: 'password',
                               email: 'email@email.com'}}
        post '/users', :params => valid_params, :headers => @header
        @user = User.find_by(id: JSON.parse(response.body)['user']['id'])
        @token_body = JWT.decode(JSON.parse(response.body)['jwt'], ENV['secret'], true, algorithm: 'HS256')[0]
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end

      it 'creates a user record' do 
        expect(@user).to be_an_instance_of(User)
      end

      it 'includes a token in the reponse' do
        expect(@token_body).to be
      end

      # test contents of token
      it 'w/ user id' do
        expect(@token_body['user_id']).to equal(@user.id)
      end

      it 'w/ an expiration' do
        time = Time.at(@token_body['exp'])
        expect(@token_body['exp'])
      end
    end

    context "w/ invalid params" do
      before do
        invalid_params = {user: {username: '',
                                 password: 'something',
                                 password_confirmation: 'something_else',
                                 email: ''}}
        post '/users', :params => invalid_params, :headers => @header
      end

      it 'returns unsuccessful' do
        expect(response).to have_http_status(:error)
      end

      it 'returns errors' do
        expect(response.body).to include("Username can't be blank", "Email can't be blank", "Password confirmation doesn't match Password")
      end
    end
  end

  # test different update actions
  describe "PATCH /users/:id" do
    context "for reward purchase" do
      context 'w/ valid params' do
        before do
          @user = User.create(username: 'me', password: 'pw', password_confirmation: 'pw', email: 'an@email.com', points: 10)
          @reward = Reward.create(desc: 'description', cost: '5', num_available: 5)
          valid_params = {id: @user.id, rewardId: @reward.id}

          patch "/users/#{@user.id}", :params => valid_params
        end

        it 'returns successful' do
          expect(response).to have_http_status(:success)
        end

        it 'updates the users points' do
          
        end
      end
    end
  end
end
