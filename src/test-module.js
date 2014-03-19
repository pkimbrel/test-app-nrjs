(function ($) {
	var SomeModule = function(_element){
		var element = $(_element);
		var obj = this;
		
		var parm1, parm2;
		
		var init = function() {
			parm1 = element.data("parm1");  
			parm2 = element.data("parm2");  
		};

		// Public method
		this.publicMethod = function(){
			var retVal = parm1 + " ; " + parm2;
			console.log("publicMethod() called: " + retVal);
			return retVal;
		};
		
		init();
	};

	$.fn.someModule = function () {
		return this.each(function() {
			var element = $(this);

			// Return early if this element already has a plugin instance
			if (element.data("instance")) return;

			// Store plugin object in this element's data
			var myplugin = new SomeModule(this);
			element.data('instance', myplugin);
		});
	};

	$(".some-module").someModule();
}(jQuery));
