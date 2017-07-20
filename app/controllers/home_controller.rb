class HomeController<ApplicationController
	def index
		
	end
	def getData
		@list=[{name: "hung"},{name: "han"},name: "songoku"]
		respond_to do |f|
			f.html
			f.json {render json: @list}
		end
	end
end