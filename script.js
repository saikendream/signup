const pass = document.querySelector("#u_pass");
const passConf = document.querySelector("#u_pass-conf");
const form = document.querySelector(".main");
const clear = document.querySelector('button[type="reset"]')

passConf.addEventListener("input", function(e) {
    if(pass.value != passConf.value) {
        console.log("Password unmatch")
        passConf.setCustomValidity("Your password doesn't match.");
    } else {
        console.log("Password confirmed.")
        passConf.setCustomValidity("");
    }
});

form.addEventListener("input", function(e) {
    let input = e.target.closest("input");

    if(input.value != '') {
        console.log("Input detedted")
        input.classList.add("filled");
    } else {
        input.classList.remove("filled");
    }
});

clear.addEventListener("click", function(e) {
    console.log("CLEAR clicked");
    form.querySelectorAll("input").forEach(function(elem) {
        elem.classList.remove("filled")
    });
});