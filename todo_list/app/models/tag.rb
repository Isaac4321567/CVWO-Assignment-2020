class Tag < ApplicationRecord
	has_and_belongs_to_many :tasks

	def self.tagged_on(id)
  	    Task.find_by_id!(id).tags
	end
end
