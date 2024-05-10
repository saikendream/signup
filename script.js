let pass = document.querySelector("#u_pass");
let passConf = document.querySelector("#u_pass-conf");

passConf.addEventListener("input", function(e) {
    if(passConf.value == pass.value) {
        passConf.setCustomValidity("Your password doesn't match.");
    } else {
        passConf.setCustomValidity("");
    }
});