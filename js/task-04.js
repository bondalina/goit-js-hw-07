const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const object = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
    }
    if (object.email.trim() === "" || object.password.trim() === "") {
        alert("All form fields must be filled in");
        return;
    }
    console.log(object)

    form.reset();

})

// const object = {
//     email: "",
//     password: "",
// };

// const inputs = document.querySelectorAll("input");
// inputs.forEach(input => input.addEventListener("input", (event) => {
//     object[event.target.name] = event.target.value
// }));

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (object.email.trim() === "" || object.password.trim() === "") {
//         console.error("All form fields must be filled in");
//         return;
//     }
//     console.log(object)

//     form.reset();
    
// });

