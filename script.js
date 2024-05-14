const pass = document.querySelector("#u_pass");
const passConf = document.querySelector("#u_pass-conf");
const form = document.querySelector(".main");
const clear = document.querySelector('button[type="reset"]')

passConf.addEventListener("input", function(e) {
    if(pass.value != passConf.value) {
        passConf.setCustomValidity("Your password doesn't match.");
    } else {
        passConf.setCustomValidity("");
    }
});

form.addEventListener("input", function(e) {
    let input = e.target.closest("input");

    if(input.value != '') {
        input.classList.add("filled");
        let div = e.target.closest(".input");

        if(!input.checkValidity()) {
            div.classList.add("invalid");
        } else {
            div.classList.remove("invalid");
        };
    } else {
        input.classList.remove("filled");
    }
});

clear.addEventListener("click", function(e) {
    form.querySelectorAll("input").forEach(function(elem) {
        elem.classList.remove("filled")
    });
});