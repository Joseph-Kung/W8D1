class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.float :lat, null: false, unique: true
      t.float :lng, null: false, unique: true

      t.timestamps
    end
  end
end
