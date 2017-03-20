var Donation = (function() {

    var totalAmount = 0;

    return {
        addDonation: function(donationAmount) {
            totalAmount += donationAmount;
            return donationAmount;
        },
        getDonation: function() {
            return totalDonation;
        },
        remove: function() {
            totalAmount -= donationAmount;
            return donationAmount;
        },
        getTotalDonation: function() {
            return totalDonation;
        }
    };
})();