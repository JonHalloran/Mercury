class Run < ApplicationRecord
  validates :user, :route, :duration, presence: true

  belongs_to :user
  belongs_to :route


end
