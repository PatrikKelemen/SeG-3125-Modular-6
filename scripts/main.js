function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
   
    var filter = /^(\([-+]?[0-9]+)\)[0-9]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(txtCVV) {
    var a = document.getElementById(txtCVV).value;
    
    var filter = /^[-+]?[0-9][0-9][0-9]$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCardNumber) {
    var a = document.getElementById(txtCardNumber).value;
    
    var filter = /^[-+]?[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePostalCode(txtPostalCode) {
    var a = document.getElementById(txtCardNumber).value;
    
var filter = /^[-+]?[a-z][0-9][a-z][0-9][a-z][0-9]$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 6 )
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


function empty(inputtx) 
   {
	   var a = document.getElementById(inputtx).value;
     if (a.length == 0)
      { 	
         return true; 
      }  	
      return false; 
    } 

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxx)xxxxxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );
	
	$("#cnum").on("change", function(){
        if (!validateCard("cnum")){
            alert("Wrong format for Card");
            $("#cnum").val("xxxxxxxxxxxxxxxx");
            $("#cnum").addClass("error");
        }
        else {
            $("#cnum").removeClass("error");
        }
    });
	
	$("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Wrong format for CVV");
            $("#cvv").val("xxx");
            $("#cvv").addClass("error");
        }
        else {
            $("#cvv").removeClass("error");
        }
    });
	
	$("#bookBtn").click(function(){
       

	   if (!validateCVV("cvv") || $("#cvv").hasClass("error") || !validateCard("cnum") || $("#cnum").hasClass("error")  ){
            alert("Error with Card");
    }
		 else if(empty("inputName")) { alert("Please fill in your name ");}
		 else if(empty("dateInput")) { alert("Please fill in the Date ");}
		 else if(empty("expdate")) { alert("Please fill in the Experation Date  ");}
		else if(empty("pstcode")) { alert("Please fill in the Postal Code ");} 
        else {
			 alert("booking complete");
			 $("#exampleModal").modal('hide');
        }
    });
	
	$("#cnum").on("mouseenter", function(){
        $("#cnum").addClass("showInput");
    });

    $("#cnum").on("mouseleave", function(){
        $("#cnum").removeClass("showInput");
    });
	
	$("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
	
	/*$("#pstcode").on("change", function(){
        if (!validateCVV("pstcode")){
            alert("Wrong format for Postal code");
            $("#pstcode").val("x0x0x0");
            $("#pstcode").addClass("error");
        }
        else {
            $("#pstcode").removeClass("error");
        }
    });*/



});