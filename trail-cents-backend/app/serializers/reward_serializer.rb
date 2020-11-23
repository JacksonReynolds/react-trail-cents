class RewardSerializer
  include FastJsonapi::ObjectSerializer
  attributes :desc, :cost, :num_available
end
