class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :lat, :long, :desc, :date, :category, :start, :end, :duration
end
