class SetDefault < ActiveRecord::Migration[6.0]
  def up
	change_column_default :tasks, :done, false
  end

  def down
	change_column_default :tasks, :done, nil
  end
end
