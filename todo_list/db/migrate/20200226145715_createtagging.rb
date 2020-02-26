class Createtagging < ActiveRecord::Migration[6.0]
  def change
	create_table :tagging do |t|
      t.belongs_to :tag, foreign_key: true
      t.belongs_to :task, foreign_key: true
      t.timestamps
    end
  end
end
