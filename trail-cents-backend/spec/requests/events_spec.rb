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
  end
  describe "GET /events" do
    before do

    end
  end
end
