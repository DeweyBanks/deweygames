class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :subject
      t.string :body
      t.text :answers

      t.timestamps null: false
    end
  end
end
