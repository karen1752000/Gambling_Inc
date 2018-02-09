require 'sinatra'

get '/' do    
    erb :index
end

get '/layout' do
  erb :layout
end

get '/mini_baccarat' do
  erb :mini_baccarat
end

get '/poker' do
	erb :poker
end

get '/contact' do 
	erb :contact
end

get '/blackjack' do
	erb :blackjack
end
