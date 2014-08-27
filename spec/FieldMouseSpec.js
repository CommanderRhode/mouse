describe("FieldMouse", function(){

	it("should create a WebAudio Object", function(){
		var shyFieldMouse = new fieldMouse();
		expect(shyFieldMouse.squeak()).toEqual(true);
	});
});