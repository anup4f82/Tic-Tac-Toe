class Welcome

	@@board = Array.new(9)
	@@counter = 0
	@@winner = nil

  def self.resetboard
  	
     @@board = []
     @@winner = nil
     @@counter = 0
   end




     def self.cell(cellvalue)
     
     	
     	if @@counter % 2 == 0
     		if @@board[cellvalue] == nil
     			
     	  @@board[cellvalue] = "X"
     	  @@counter+=1
     	
     	end
     	else
     		if @@board[cellvalue] == nil
     	  @@board[cellvalue] = "O"
     
     	  @@counter+=1
     	 
     	end
     	end
     
       
        @@board
     end


     def self.winner
     	if ([@@board[0],@@board[1],@@board[2]].uniq.length == 1 && [@@board[0],@@board[1],@@board[2]].uniq[0] != nil)
         
     	  @@winner = "Player #{@@board[0]} WINS!"
     	  

     	elsif ([@@board[3],@@board[4],@@board[5]].uniq.length == 1 && [@@board[3],@@board[4],@@board[5]].uniq[0] != nil)
     	 
     	   @@winner = "Player #{@@board[3]} WINS!"
           
     	 elsif ([@@board[6],@@board[7],@@board[8]].uniq.length == 1 && [@@board[6],@@board[7],@@board[8]].uniq[0] != nil)
     	 
     	  @@winner = "Player #{@@board[6]} WINS!"
            
     	   elsif ([@@board[0],@@board[3],@@board[6]].uniq.length == 1 && [@@board[0],@@board[3],@@board[6]].uniq[0] != nil)
     	   
     	  @@winner = "Player #{@@board[0]} WINS!"
           
     	   elsif ([@@board[1],@@board[4],@@board[7]].uniq.length == 1 && [@@board[1],@@board[4],@@board[7]].uniq[0] != nil)
     	  
     	  @@winner = "Player #{@@board[1]} WINS!"
          
     	   elsif ([@@board[2],@@board[5],@@board[8]].uniq.length == 1 && [@@board[2],@@board[5],@@board[8]].uniq[0] != nil)
     	   	
     	   @@winner = "Player #{@@board[2]} WINS!"
        
     	   elsif ([@@board[0],@@board[4],@@board[8]].uniq.length == 1 &&  [@@board[0],@@board[4],@@board[8]].uniq[0] != nil)
     	  
     	  @@winner = "Player #{@@board[0]} WINS!"
         
     	   elsif ([@@board[2],@@board[4],@@board[6]].uniq.length == 1 && [@@board[2],@@board[4],@@board[6]].uniq[0] != nil)
     	   
     	  @@winner = "Player #{@@board[2]} WINS!"

          elsif (@@board.compact.length == 9)
               @@winner = "Draw!"

     	end
      end

     # def self.winner

     # 	@@board.each_slice(3){|x| p}
     # end
     	 

     	 	

 end