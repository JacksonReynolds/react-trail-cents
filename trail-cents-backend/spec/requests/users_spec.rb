require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "w/ valid params" do
      before do
        header = {'accepts': 'application/json'}
        valid_params = {user: {username: 'valid user', 
                               password: 'password',
                               password_confirmation: 'password',
                               email: 'email@email.com'}}
        post '/users', :params => valid_params, :headers => header
        @user = User.find_by(id: JSON.parse(response.body)['user']['id'])
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end

      it 'creates a user record' do 
        expect(@user).to be_an_instance_of(User)
      end
    end
  end
end
