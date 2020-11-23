class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :lat, :long, :desc, :date, :category, :start, :end, :duration
end
