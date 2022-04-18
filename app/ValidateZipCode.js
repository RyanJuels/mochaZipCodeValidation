// JavaScript Document

var ValidateZipCode = function(inZip){
  this.inZip = inZip;
};

ValidateZipCode.prototype.validateZip = function() {
  //our code goes here
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if(this.inZip === ""){
    return "Please enter a number";
  }

  //if(this.inZip = "00000"){
  //  return "Not a valid zip code";
  //}

  const numberType = parseInt(this.inZip);
  if(this.inZip == "-"){
    return "Please enter a number";
  }

  if(specialChars.test(this.inZip)){
    return "Please enter 0-9"
  }
  
  if(isNaN(numberType)){
    return "Please enter a number";
  }

  if(this.inZip.length != 5){
    return "Please enter a five digit zip code";
  }

  
  if(numberType < 500 || numberType > 99950){
    return "Not a valid zip code";
  }

  


  return "Valid";
};

module.exports = ValidateZipCode;
