var totalDonation = 0;
var finalDonation = 0;

var donationForm = document.getElementById("donate");
var firstName = document.getElementById("firstname");


donationForm.addEventListener("click", function(event) {
	var newDonation = {"firstName":firstName.value}
	Donation.setDonation(newDonation)
    
})


