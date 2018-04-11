class Comment < ApplicationRecord
  validates :run, :user, :body, presence: true

  belongs_to :user
  belongs_to :run

end
