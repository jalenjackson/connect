Rails.application.routes.draw do

  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  root to: 'dashboard#index'

  draw :registration
  draw :user
  draw :profile
  draw :dashboard
  draw :items
  draw :categories
  draw :search
end
