class FactsController < ApplicationController
    
    
    def show
        fact = Fact.where(:fact_id => params[:id]).select("COUNT(facts.fact_id) AS total, SUM(CAST(facts.vote AS INT)) AS truthy")
        render json: fact
    end

    # POST /facts
    def create
        fact = Fact.new(fact_params)

        if fact.save
        render json: fact, status: :created, location: fact
        else
        render json: fact.errors, status: :unprocessable_entity
        end
    end

    private
    # Only allow a list of trusted parameters through.
    def fact_params
        params.require(:fact).permit(:fact_id, :vote)
    end
    
end
