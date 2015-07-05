class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   :email
      t.string   :name
      t.boolean  :admin
      t.string   :password_digest
    end
  end
end
