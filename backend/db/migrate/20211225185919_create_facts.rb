class CreateFacts < ActiveRecord::Migration[6.1]
  def change
    create_table :facts do |t|
      t.string :fact_id
      t.boolean :vote

      t.timestamps
    end
  end
end
