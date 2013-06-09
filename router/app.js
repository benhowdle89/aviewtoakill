app.routers.app = Backbone.Router.extend({

	routes: {
		'': 'home',
		'/': 'home',
		'home': 'home',
		'about': 'about',
		'contact': 'contact'
	},

	initialize: function() {
		this.registerStatic();
		this.renderStatic();
	},

	registerStatic: function(){
		app.utils.viewManager.addRegion('header', '#jsRegion-header');
		app.utils.viewManager.addRegion('content', '#jsRegion-content');
	},

	renderStatic: function(){
		app.utils.viewManager.swap('header', new app.views.header());
	},

	home: function(){
		app.utils.viewManager.swap('content', new app.views.home());
	},

	about: function(){
		app.utils.viewManager.swap('content', new app.views.about());
	},

	contact: function(){
		app.utils.viewManager.swap('content', new app.views.contact());
	}

});