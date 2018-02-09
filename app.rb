require 'sinatra'

get '/' do    
    erb :index
end

get '/poker' do
	erb :poker
end


