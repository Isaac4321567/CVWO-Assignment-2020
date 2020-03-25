class CreateTagsTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tags_tasks, :id => false do |t|
	t.integer "tag_id"
	t.integer "task_id"
    end
  end
end
