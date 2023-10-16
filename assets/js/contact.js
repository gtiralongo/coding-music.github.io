
const contact_post = () => {
    console.log("esta entrando a contact")
    let formulario = document.getElementById('contact_form');
    let name = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let message = document.getElementById('mensaje').value;

    console.log(name, email, message);
    fetch('https://sheetdb.io/api/v1/yx651f3r93qnt', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                "name": name,
                "email": email,
                "message": message
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
  //   formulario.reset();
}