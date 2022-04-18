// JavaScript Document

var assert = require('chai').assert;
var ValidateZipCode = require('../app/ValidateZipCode');

describe("Testing Validate ZipCode", function(){
	
	it("input empty field", function(){
		var obj = new ValidateZipCode("");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input a", function(){
		var obj = new ValidateZipCode("a");
		assert.equal(obj.validateZip(), "Please enter a number");
	});	

	it("input Fredd", function(){
		var obj = new ValidateZipCode("Fredd");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input 0", function(){
		var obj = new ValidateZipCode("0");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code");
	});

	it("input 00", function(){
		var obj = new ValidateZipCode("00");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code");
	});

	it("input 00000", function(){
		var obj = new ValidateZipCode("00000");
		assert.equal(obj.validateZip(), "Not a valid zip code");
	});

	it("input 4-5-2", function(){
		var obj = new ValidateZipCode("4-5-2");
		assert.equal(obj.validateZip(), "Please enter 0-9");
	});

	it("input ' ' ", function(){
		var obj = new ValidateZipCode(" ");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input -", function(){
		var obj = new ValidateZipCode("-");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input 1", function(){
		var obj = new ValidateZipCode("1");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code");
	});

	it("input 123", function(){
		var obj = new ValidateZipCode("123");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code");
	});

	it("input null", function(){
		var obj = new ValidateZipCode(null);
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input t3st", function(){
		var obj = new ValidateZipCode("t3st");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input INSERT INTO", function(){
		var obj = new ValidateZipCode("INSERT INTO");
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input +++++", function(){
		var obj = new ValidateZipCode("+++++");
		assert.equal(obj.validateZip(), "Please enter 0-9");
	});

	it("input 1234A", function(){
		var obj = new ValidateZipCode("+++++");
		assert.equal(obj.validateZip(), "Please enter 0-9");
	});

	it("input undefined", function(){
		var obj = new ValidateZipCode(undefined);
		assert.equal(obj.validateZip(), "Please enter a number");
	});

	it("input 00501", function(){
		var obj = new ValidateZipCode("00501");
		assert.equal(obj.validateZip(), "Valid");
	});



/*
	it("should assert volume of the box", function(){
		var obj = new Box(10, 20, 30);
		assert.equal(obj.getVolume(), 6000);		
	});
*/	

	
});	//end "Testing Box"