require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    before do
      @header = {'accepts': 'application/json'}
    end
    context "w/ valid params" do
      before do
        valid_params = {user: {username: 'valid user', 
                               password: 'password',
                               password_confirmation: 'password',
                               email: 'email@email.com'}}
        post '/users', :params => valid_params, :headers => @header
        @user = User.find_by(id: JSON.parse(response.body)['user']['id'])
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end

      it 'creates a user record' do 
        expect(@user).to be_an_instance_of(User)
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
end
