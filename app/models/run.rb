class Run < ApplicationRecord
  validates :user, :route, :duration, :date, presence: true

  belongs_to :user
  belongs_to :route

  has_many :comments
end
