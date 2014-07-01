Rails.application.routes.draw do

 root :to => 'game#index'
  post '/' => 'game#create'

end
