var totalDonation = 0;
var finalDonation = 0;

var donationForm = document.getElementById("Donation");


document.getElementById("donate").addEventListener("click", function(){
	totalDonation = Donation.getTotalDonation();
	finalDonation.innerHTML = `total:${totalDonation}`;
})

