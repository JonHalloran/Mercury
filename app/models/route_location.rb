class RouteLocation < ApplicationRecord
  validates :route, :order, :latitude, :longitude, presence: true

  belongs_to :route
end
