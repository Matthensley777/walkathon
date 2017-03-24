var Donation = (function(donor) {
    var list = [];

    donor.setDonation = function(donation) {
    	console.log(donation)
        list.push(donation);
    }

    return donor;
})(Donation || {});