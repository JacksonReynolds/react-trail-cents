require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "w/ valid params" do
      before do
        header = {'accepts': 'application/json'}
        valid_params = {username: 'valid user', 
                        password: 'password',
                        password_confirmation: 'password',
                        email: 'email@email.com'}
        post '/users', :params => valid_params, :headers => header
      end

      it 'returns successful' do
        expect(response).to have_http_status(:success)
      end
    end
  end
end
