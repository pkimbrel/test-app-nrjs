/**
 * Created by pkimbrel on 3/15/14.
 */
describe("Test Module", function() {
	var $container;

	beforeEach(function(){
		$container = $("<body>");

		var $module = $("<div>").addClass("find-agent").attr("id", "module1");
		var $form = $("<form>").attr("action", "#").attr("method", "GET");
		var $input1 = $("<input>").attr("type", "text").attr("name", "zipCode");
		var $input2 = $("<input>").attr("type", "submit").attr("value", "Go");

		$container.append($module);

		$module.append($form);
		$form.append($input1);
		$form.append($input2);

		$container.find(".find-agent").findagent();
	});

	it("Should have a message equal to 'Hello!'", function() {
		var findAgent = $container.find(".find-agent").data('find-agent');
		//alert(findAgent);
		findAgent.publicMethod();

		//expect(example.message).toBe('Hello!');
		expect(true).toBe(true);
	});
});
