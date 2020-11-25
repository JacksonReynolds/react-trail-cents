class EventSerializer < ActiveModel::Serializer
  attributes :title, :lat, :long, :desc, :date, :category, :start, :end, :duration
end
