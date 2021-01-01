require 'rails_helper'

RSpec.describe "Events", type: :request do
  before do
    Event.create([
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0},
      {title: 'crazy trail day', duration: 4.0}
    ])
    @events = Event.all
  end
  describe "GET /events" do
    before do
      get '/events'
    end

    it 'returns successful' do
      expect(response).to have_http_status(:success)
    end

    it 'returns an array of event records' do
      expect(JSON.parse(response.body).length).to eq(@events.length)
    end
  end
end
