window.app = {
	views: {},
	routers: {},
	utils: {},
	init: function() {
		app.router = new app.routers.app();
		Backbone.history.start({
			pushState: true,
			root: "/"
		});
		app.router.navigate('home', {
			trigger: true
		});
	}
};

$(document).ready(function() {
	app.init();
});