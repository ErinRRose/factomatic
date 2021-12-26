class FactsController < ApplicationController
    
    
    def show
        fact = Fact.find(params[:id])
        render json: fact
    end
    
end
