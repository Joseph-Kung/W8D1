class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true, uniqueness: true
end
