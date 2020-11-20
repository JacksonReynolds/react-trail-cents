class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :location, :description, :date, :category, :start, :end, :duration
end
