describe("Mouse", function(){
	
	it("should create a valid WebAudio object", function(){
		
		
		var whiteMouse = new mouse();
		expect(whiteMouse.squeak(0)).toEqual(true);
	});



});