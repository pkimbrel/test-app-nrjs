/**
 * Created by pkimbrel on 3/15/14.
 */
describe("Test Module", function() {
	var $container;

	beforeEach(function(){
		$container = $("<body>");

		var $module = $("<div>").addClass("sample-module").attr("id", "module1");
		$module.data("parm1", "Value #1");
		$module.data("parm2", "Value #2");

		$container.append($module);

		$container.find(".sample-module").someModule();
	});

	it("Return value should have 'Value #1 ; Value #2'", function() {
		var someModule = $container.find(".sample-module").data("instance");
		
		var testValue = someModule.publicMethod();

		//expect(example.message).toBe('Hello!');
		expect(testValue).toBe("Value #1 ; Value #2");
	});
});
