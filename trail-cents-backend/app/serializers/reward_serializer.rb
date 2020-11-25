class RewardSerializer < ActiveModel::Serializer
  attributes :id, :desc, :cost, :num_available
end
