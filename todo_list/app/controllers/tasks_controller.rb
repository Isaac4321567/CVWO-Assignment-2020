class TasksController < ApplicationController
	def index
	end

	def new
		respond_to do |format|
			format.html

    			format.js
  		end

	end

	def create
		@task = Task.new(task_params)

		@task.save
		redirect_to tasks_path
	end		

	private
		def task_params
			params.require(:task).permit(:title,:description)
		end
end
