class Task < ApplicationRecord
	has_and_belongs_to_many :tags

	def self.tagged_with(name)
		Tag.find_by!(name: name).tasks
	end


	def tag_list
		tags.map(&:name).join(', ')
	end

	def tag_list=(names)
		self.tags = names.split(',').map do |n|
			Tag.where(name: n.strip).first_or_create!
		end
	end
end
