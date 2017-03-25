var totalDonation = 0;
var finalDonation = 0;

var donationForm = document.getElementById("donate");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var amount = document.getElementById("donatebox");


donationForm.addEventListener("click", function(event) {
	var newDonation = {"firstName":firstName.value}
	Donation.setDonation(newDonation)
    console.log(firstName)
})

donationForm.addEventListener("click", function(event) {
	var newDonation = {"lastName":lastName.value}
	Donation.setDonation(newDonation)
    console.log(lastName)
})

donationForm.addEventListener("click", function(event) {
	var newDonation = {"email":email.value}
	Donation.setDonation(newDonation)
    
})

donationForm.addEventListener("click", function(event) {
	var newDonation = {"amount":amount.value}
	Donation.setDonation(newDonation)
    
})


