function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const content = document.querySelector('.content');
const content_valid = document.querySelector('.content-valid');
const date = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const hero_section = document.querySelector('.hero-section');
const topnav = document.querySelector('.topnav');
const footer = document.querySelector('footer');
const confirmed = document.querySelector('.confirmed');

content_valid.style.display = "none";

/*
console.log("date : " + date.value);
console.log("quantity : " + quantity.value)
    
    const radio = document.getElementsByName("location").forEach(radio => {
        console.log("radio : " + radio.id);
    })
    */

//console.log("check :  " + document.querySelector('input[name="location"]:checked'));


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
    //console.log('fermé');
    //console.log("check :  " + document.querySelector('input[name="location"]:checked').value);
    //validate();
}

function closeConfirmation() {
    content_valid.style.display = "none";
    modalbg.style.display = 'none';
    hero_section.style.display = 'initial';
    topnav.style.display = "initial";
    footer.style.display = "initial";
}

function checkFirstAndLastName(input, type) {
    const regex = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
    const input_value = input.value;
    const test = regex.test(input_value);
    if (test) {
        //input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        //input.parentElement.removeAttribute('valid');
        if (type == 'first') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        }
        if (type == 'last') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        }
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

function checkEmail(input) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = regex.test(input.value)
    if (test) {
        //input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        //input.parentElement.removeAttribute('valid');
        input.parentElement.setAttribute('data-error', 'Vous devez entrer une adresse email valide.');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

function checkBirthdate(input) {
    if (input.value) {
        //input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        //input.parentElement.removeAttribute('valid');
        input.parentElement.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

function checkQuantity(input) {
    if (input.value) {
        //input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    }
}

function validate() {
    /*const radio_value = document.querySelector('input[name="location"]:checked').value;
    console.log(radio_value)
    if (radio_value == null) {
        const radio_parent = document.querySelector('input[name="location"]').parentNode;
        radio_parent.removeAttribute('valid');
        radio_value.setAttribute('data-error', 'Vous devez choisir une option.');
        radio_value.setAttribute('data-error-visible', true);
    }
    const check_value = document.querySelector('input[id="checkbox1"]').value;
    console.log(check_value);*/
    const radio_value = document.querySelector('input[name="location"]:checked');
    if (radio_value == null) {
        const radio_parent = document.querySelector('input[name="location"]').parentNode;
        radio_parent.setAttribute('data-error', 'Vous devez choisir une option.');
        radio_parent.setAttribute('data-error-visible', true);
    }
    const check_value = document.getElementById('checkbox1').checked;
    if (check_value == false) {
        const check_parent = document.querySelector('input[id="checkbox1"]').parentNode;
        check_parent.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
        check_parent.setAttribute('data-error-visible', true);
    }
    const date = document.getElementById('birthdate').value;
    if (date == '') {
        const date_parent = document.querySelector('input[id="birthdate"]').parentNode;
        date_parent.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
        date_parent.setAttribute('data-error-visible', true);
    }
    const quantity = document.getElementById('quantity').value;
    if (!quantity) {
        const quantity_parent = document.querySelector('input[id="quantity"]').parentNode;
        quantity_parent.setAttribute('data-error', 'Vous devez entrer un nombre.');
        quantity_parent.setAttribute('data-error-visible', true);
    }
    const first = document.getElementById('first').value;
    if (!first) {
        const first_parent = document.querySelector('input[id="first"]').parentNode;
        first_parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        first_parent.setAttribute('data-error-visible', true);
    }
    const last = document.getElementById('last').value;
    if (!last) {
        const last_parent = document.querySelector('input[id="last"]').parentNode;
        last_parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        last_parent.setAttribute('data-error-visible', true);
    }
    const email = document.getElementById('email').value;
    if (!email) {
        const email_parent = document.querySelector('input[id="email"]').parentNode;
        email_parent.setAttribute('data-error', 'Vous devez entrer une adresse email valide.');
        email_parent.setAttribute('data-error-visible', true);
    }
    if (radio_value !== null && check_value !== false && date !== '' && quantity && first && last && email) {
        console.log("valid true");
        //content.style.display = "none";
        //content_valid.style.display = "initial";
        return true;
    } else {
        console.log("valid false");
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validate() == true) {
        modalbg.style.display = 'none';
        hero_section.style.display = 'none';
        content_valid.style.display = "initial"
        confirmed.style.color = "white";
        topnav.style.display = "none";
        footer.style.display = "none";
    }
})