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
