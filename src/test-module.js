(function ($) {
	var FindAgent = function(element){
		var element = $(element);
		var obj = this;

		// Public method
		this.publicMethod = function(){
			console.log('publicMethod() called!');
		};
	};

	$.fn.findagent = function () {
		return this.each(function() {
			var element = $(this);

			// Return early if this element already has a plugin instance
			if (element.data('find-agent')) return;

			var myplugin = new FindAgent(this);

			// Store plugin object in this element's data
			element.data('find-agent', myplugin);
		});
	};

	$(".find-agent").findagent();
}(jQuery));
