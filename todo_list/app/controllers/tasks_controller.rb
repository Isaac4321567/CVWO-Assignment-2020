class TasksController < ApplicationController
	def index
	end

	def new
		respond_to do |format|
			format.html

    			format.js
  		end

	end
end
