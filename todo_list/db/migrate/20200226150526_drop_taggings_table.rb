class DropTaggingsTable < ActiveRecord::Migration[6.0]
  def change
	drop_table :tagging
  end
end
