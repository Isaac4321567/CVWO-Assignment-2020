class Task < ApplicationRecord
	has_and_belongs_to_many :tags

	def self.tagged_with(id)
		Tag.find_by!(id: id).tasks
	end

	

	def tag_list
		self.tags.map(&:name).join(", ")
	end

	def tag_list=(names)
		self.tags = names.split(',').map do |n|
			Tag.where(name: n.strip).first_or_create!
		end
	end
end
