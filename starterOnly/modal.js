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


const date = document.getElementById('birthdate');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
    console.log('fermé')
}

function checkFirstAndLastName(input, type) {
    const regex = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
    const input_value = input.value;
    const test = regex.test(input_value);
    if (test) {
        input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        input.parentElement.removeAttribute('valid');
        if (type == 'first') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        }
        if (type == 'last') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        }

        input.parentElement.setAttribute('data-error-visible', true);
    }
}



async function checkEmail(input) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = regex.test(input.value)
    if (test) {
        input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        input.parentElement.removeAttribute('valid');
        input.parentElement.setAttribute('data-error', 'Vous devez entrer une adresse email valide.');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

async function checkBirthdate() {
    const date = document.getElementById('birthdate');
    console.log("date : " + date.value);
    if (date.value == '' || date.value == null || date.value == undefined) {
        erreur_date.style.display = "initial";
        erreur_date.style.color = "red";
        erreur_date.style.fontSize = "12px";
    } else {
        erreur_date.style.display = "none";
    }
}