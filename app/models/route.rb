class Route < ApplicationRecord
  validates :creator, :name, :description, presence: true

  belongs_to :creator,
             class_name: :User,
             foreign_key: :user_id

  has_many :runs
end
