/* Focus on name text field on load */
window.onload = function() {
  const input = document.getElementById("name").focus();
}

$("#other-wrapper").hide();

/* Listen for value change on job role */
$("#title").on('change',function(){
	if ($(this).val().match('other')) {
		$("#other-wrapper").show();
	} else {
		$("#other-wrapper").hide();
	}
});

$('select[name=user_design] option:eq(0)').attr('disabled', 'disabled');

/* Hide colors selector */
$("#colors-js-puns").hide();

/* Create color instruction option */
const optionInstruction = $('<option selected disabled></option>').text('Select Color');
$("#color").prepend(optionInstruction);

/* Get value of design selector */
$("#design").on('change',function(){
	$("#colors-js-puns").show();
	/* Make shift color variable */
	const shirtColor = document.getElementById("color");

	/* Display options according to selection in design */
	if ($(this).val().match('js puns')) {
		$("#color").children().attr("hidden", true).attr("selected", true)
		$('#color option:contains("Puns")').attr("hidden", false).attr("selected", false)
		$('#color option:contains("Select")').attr("hidden", false).attr("selected", false)
	} else {
		$("#color").children().attr("hidden", false).attr("selected", false)
		$('#color option:contains("Puns")').attr("hidden", true).attr("selected", false)
		$('#color option:contains("Select")').attr("hidden", false).attr("selected", true)
	}
});

/* Get all activities */
const activitySet = document.getElementsByClassName('activities');
const activityList = document.querySelectorAll('input[type=checkbox]');

/* Assign checkboxes to variables */
let actMain = activityList[0];
let actFrame = activityList[1];
let actLibs = activityList[2];
let actExpress = activityList[3];
let actNode = activityList[4];
let actBuild = activityList[5];
let actNPM = activityList[6];

/* Disable and gray out lable of time conflicts */

/*Tuesday 9AM */
actFrame.addEventListener('change', function (e) {
	if (actFrame.checked) {
		actExpress.disabled = true;
		actExpress.parentElement.style.color = 'gray';
	} else {
		actExpress.disabled = false;
		actExpress.parentElement.style.color = 'black';
	}
});

actExpress.addEventListener('change', function (e) {
	if (actExpress.checked) {
		actFrame.disabled = true;
		actFrame.parentElement.style.color = 'gray';
	} else {
		actFrame.disabled = false;
		actFrame.parentElement.style.color = 'black';
	}
});

/*Tuesday 1PM */
actLibs.addEventListener('change', function (e) {
	if (actLibs.checked) {
		actNode.disabled = true;
		actNode.parentElement.style.color = 'gray';
	} else {
		actNode.disabled = false;
		actNode.parentElement.style.color = 'black';
	}
});

actNode.addEventListener('change', function (e) {
	if (actNode.checked) {
		actLibs.disabled = true;
		actLibs.parentElement.style.color = 'gray';
	} else {
		actLibs.disabled = false;
		actLibs.parentElement.style.color = 'black';
	}
});

/* Create running total */
let runningTotal = 0;

actMain.addEventListener('change', function (e) {
	if (actMain.checked) {
		runningTotal += 200;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 200;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actFrame.addEventListener('change', function (e) {
	if (actFrame.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actLibs.addEventListener('change', function (e) {
	if (actLibs.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actExpress.addEventListener('change', function (e) {
	if (actExpress.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actNode.addEventListener('change', function (e) {
	if (actNode.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actBuild.addEventListener('change', function (e) {
	if (actBuild.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

actNPM.addEventListener('change', function (e) {
	if (actNPM.checked) {
		runningTotal += 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	} else {
		runningTotal -= 100;
		document.getElementById('subtotal').innerHTML = "Total: $" + runningTotal + ".00";  
	}
});

/* Create total cost line */
let subtotal = document.createElement("p");
subtotal.setAttribute("id", "subtotal");
subtotal.appendChild(document.createTextNode("Total: $" + runningTotal + ".00"));
actNPM.parentElement.parentElement.appendChild(subtotal);

/* Create variables for payment options */
const paymentOption = document.getElementById("payment");

const paymentCC = document.getElementById("credit-card");
let paymentPayPal = paymentCC.nextSibling.nextSibling;
let paymentBitCoin = paymentPayPal.nextSibling.nextSibling;

/* Hide payment types */
//paymentCC.style.display = "none";
paymentPayPal.style.display = "none";
paymentBitCoin.style.display = "none";

$('select[name=user_payment] option:eq(0)').attr('disabled', 'disabled');
$('select[name=user_payment] option:eq(1)').attr('selected', 'selected');

paymentOption.addEventListener('change', function (e) {

  if (e.target.value === "credit card") {

  	paymentCC.style.display = "block";
  	paymentPayPal.style.display = "none";
  	paymentBitCoin.style.display = "none";
  	
  } else if (e.target.value === "paypal") {

  	paymentCC.style.display = "none";
  	paymentPayPal.style.display = "block";
  	paymentBitCoin.style.display = "none";
  	
  } else if (e.target.value === "bitcoin") {

  	paymentCC.style.display = "none";
  	paymentPayPal.style.display = "none";
  	paymentBitCoin.style.display = "block";
  	
  }
});

/* Check form elements on button click */
const btnCollection = document.getElementsByTagName("BUTTON");
let btnSubmit = btnCollection[0];

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("mail");
const activityLegend = document.getElementsByTagName("LEGEND")[2];

let inputCC = document.getElementById("cc-num");
let inputZip = document.getElementById("zip");
let inputCVV = document.getElementById("cvv");

btnSubmit.addEventListener("click", function(event){
  //event.preventDefault();

	if (inputName.value === "") {
		inputName.style.borderColor = "tomato";
		inputName.previousElementSibling.style.color = "tomato";
		event.preventDefault();
	} else {
		inputName.style.borderColor = "#c1deeb";
		inputName.previousElementSibling.style.color = "black";
	}

	if (inputEmail.value === "") {
		inputEmail.style.borderColor = "tomato";
		inputEmail.previousElementSibling.style.color = "tomato";
		event.preventDefault();
	} else {
		inputEmail.style.borderColor = "#c1deeb";
		inputEmail.previousElementSibling.style.color = "black";
	}

	if (document.getElementById('subtotal').innerHTML === "Total: $0.00") {
		activityLegend.style.color = "tomato";
		event.preventDefault();
	} else {
		activityLegend.style.color = "#184f68";
	}

	if (paymentOption.value === "credit card") {

  	if (inputCC.value === "") {
			inputCC.style.borderColor = "tomato";
			inputCC.previousElementSibling.style.color = "tomato";
			event.preventDefault();
		} else {
			if (/^[0-9]{13,16}$/.test(inputCC.value)) {
				inputCC.style.borderColor = "#148F77";
				inputCC.previousElementSibling.style.color = "#148F77";
				inputCC.previousElementSibling.innerHTML = "Card Number:";
			} else {
				inputCC.style.borderColor = "tomato";
				inputCC.previousElementSibling.style.color = "tomato";
				inputCC.previousElementSibling.innerHTML = "Card Number: (Error)";
				event.preventDefault();
			}
		}

		if (inputZip.value === "") {
			inputZip.style.borderColor = "tomato";
			inputZip.previousElementSibling.style.color = "tomato";
			event.preventDefault();
		} else {
			if (/^[0-9]{5}$/.test(inputZip.value)) {
				inputZip.style.borderColor = "#148F77";
				inputZip.previousElementSibling.style.color = "#148F77";
				inputZip.previousElementSibling.innerHTML = "Zip Code:";
			} else {
				inputZip.style.borderColor = "tomato";
				inputZip.previousElementSibling.style.color = "tomato";
				inputZip.previousElementSibling.innerHTML = "Zip Code: (Error)";
				event.preventDefault();
			}
		}

		if (inputCVV.value === "") {
			inputCVV.style.borderColor = "tomato";
			inputCVV.previousElementSibling.style.color = "tomato";
			event.preventDefault();
		} else {
			if (/^[0-9]{3,4}$/.test(inputCVV.value)) {
				inputCVV.style.borderColor = "#148F77";
				inputCVV.previousElementSibling.style.color = "#148F77";
				inputCVV.previousElementSibling.innerHTML = "CVV:";
			} else {
				inputCVV.style.borderColor = "tomato";
				inputCVV.previousElementSibling.style.color = "tomato";
				inputCVV.previousElementSibling.innerHTML = "CVV: (Error)";
				event.preventDefault();
			}
		}

	} 

});

/* Create tooltip */

let emailTooltip = document.createElement("div");
emailTooltip.setAttribute("id", "tooltip-alert");
emailTooltip.appendChild(document.createTextNode("Provide a valid email."));
$("#mail").before(emailTooltip);
$("#tooltip-alert").hide();

/* Verify email address is an email address (I TOTALLY DIDN'T SEE I NEEDED TO USE JQUERY ON THIS PROJECT - SO HERE'S SOME JQUERY) */

const $emailCheck = /^[^@]+@[^@.]+\.[a-z]+$/;

$("#mail").on('keypress keydown keyup change',function(){

	if (!$(this).val().match($emailCheck)) {

		/* Hide tooltip */
		$("#tooltip-alert").show();

	} else {

		/* Show tooltip */
		$("#tooltip-alert").hide();

	}

});






