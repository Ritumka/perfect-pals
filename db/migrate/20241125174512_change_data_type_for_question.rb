class ChangeDataTypeForQuestion < ActiveRecord::Migration[7.1]
  def change
    change_column :surveys, :question, :integer
  end
end
