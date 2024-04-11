function showInquiryForm(productName) {
    document.getElementById("product").value = productName;
    document.getElementById("inquiryModal").style.display = "block";
}

function closeInquiryForm() {
    document.getElementById("inquiryModal").style.display = "none";
}

function submitInquiry() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var product = document.getElementById("product").value; 

    alert("Thank you for your inquiry regarding " + product + "! We will get back to you soon.");
    closeInquiryForm();
    return false; 
}