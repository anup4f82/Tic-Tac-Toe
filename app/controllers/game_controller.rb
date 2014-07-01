class GameController < ApplicationController
# @@c = 0

   @board = Array.new(9)

	def index
     @board = Array.new(9)
      render :index
       

    end




   def create

   	   
	    click =  params["user_click"].to_i

	    if click == 9
         @board = []
         @winner = nil
         Game.resetboard

	   else
	     @board = Game.cell(click)
	     @winner = Game.winner
	       render :index
	   end 
         
	 end

 
end