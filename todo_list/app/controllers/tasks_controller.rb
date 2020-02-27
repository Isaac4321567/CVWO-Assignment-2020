class TasksController < ApplicationController
	def index
		@tasks = Task.all
	end
	
	def destroy
		Task.destroy(params[:id])		
		redirect_to tasks_path
	end

	def new
		
		respond_to do |format|
			format.html

    			format.js
  		end
		
		@task = Task.new
	end

	def create
		@task = Task.new(task_params)

		@task.save
		redirect_to tasks_path
	end		

	private
		def task_params
			params.require(:task).permit(:title,:description, :tag_list, :tag, { tag_ids: [] }, :tag_ids)
		end
end
