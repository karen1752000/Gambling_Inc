require 'sinatra'

get '/' do    
    erb :index
end

get '/contact' do 
	erb :contact
end

get '/blackjack' do
	erb :blackjack
end