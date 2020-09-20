class Task < ApplicationRecord
  belongs_to :user, optional: true
  before_validation :set_description, unless: :description_present

  validates :description, presence: true

  def description_present
    self.description.present?
  end

  def set_description
    self.description = "Pay electricity bill."
  end

end