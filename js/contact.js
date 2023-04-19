function sendMail() {
    // debugger;
    const form = document.querySelector('form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
        if (!field.value) {
            isValid = false;
            // Add error handling here, such as displaying a message to the user
        }


    });

    if (isValid) {
        event.preventDefault();
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone_number").value,
            message: document.getElementById("message").value
        };
        if (params.email && params.name && params.phone && params.message) {
            const serviceID = "service_xr9c7q9"
            const templateID = "template_h8vl3gf"
            emailjs.send(serviceID, templateID, params)
                .then(
                    res => {
                        document.getElementById("name").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("phone_number").value = "";
                        document.getElementById("message").value = "";
                        console.log(res);
                        alert("your message send successfully")

                    })
                .catch((err) => console.log(err));
        }
    }
}
// function sendMail(e) {
//     e.preventDefault();
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone_number").value,
//         message: document.getElementById("message").value

//     };
//     if (params.email && params.name && params.phone && params.message) {
//         const serviceID = "service_xr9c7q9"
//         const templateID = "template_h8vl3gf"
//         emailjs.send(serviceID, templateID, params)
//             .then(
//                 res => {
//                     document.getElementById("name").value = "";
//                     document.getElementById("email").value = "";
//                     document.getElementById("phone_number").value = "";
//                     document.getElementById("message").value = "";
//                     console.log(res);
//                     alert("your message send successfully")

//                 }
//             )
//             .catch((err) => console.log(err));
//     }
// }
