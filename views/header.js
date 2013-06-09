app.views.header = app.views.base.extend({

	template: $('#template-header').html(),

	initialize: function() {

	},

	events: {
		'click li': 'route'
	},

	route: function(e) {
		app.router.navigate(e.currentTarget.getAttribute('data-href'), {
			trigger: true
		});
	}

});