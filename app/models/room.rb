class Room < ApplicationRecord
  has_many :informations
  has_many :posts
  has_many :users

  validates :name, length: { maximum: 30 }
end
