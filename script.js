let emailTxt = document.getElementById("emailTxt");
document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if (validateEmail(emailTxt.value)) {
        emailTxt.classList.remove("wrong");
        document.querySelector(".form img").style.display = "none";
        document.querySelector(".form>p").style.display = "none";
    } else {
        emailTxt.classList.add("wrong");
        document.querySelector(".form img").style.display = "block";
        document.querySelector(".form>p").style.display = "block";
    }
});



function validateEmail(emailField){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (emailField.match(validRegex)) 
    {
        return true;
    }
    else
        return false;

}