class EventsController < ApplicationController

    def index
        events = Event.all
        render json: EventSerializer.new(events)
    end

end
