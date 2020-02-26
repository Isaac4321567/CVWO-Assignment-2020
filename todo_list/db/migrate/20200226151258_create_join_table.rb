class CreateJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :tags, :tasks do |t|
      t.index [:tags_id, :tasks_id]
      t.index [:tasks_id, :tags_id]
    end
  end
end
