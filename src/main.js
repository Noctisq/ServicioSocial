var firebaseConfig = {
    apiKey: "AIzaSyBZhFcCfLAa_UXMvxYFunCiDSXM-iBly-o",
    authDomain: "redinags-d024a.firebaseapp.com",
    databaseURL: "https://redinags-d024a-default-rtdb.firebaseio.com",
    projectId: "redinags-d024a",
    storageBucket: "redinags-d024a.appspot.com",
    messagingSenderId: "877477379558",
    appId: "1:877477379558:web:63a8a489815d0efdd0ea27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

document.querySelector("#register").addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const title = document.querySelector("#bdate").value;
    const inst = document.querySelector("#institucion").value;
    const type = document.querySelector("#tipo").value;
    const file = document.querySelector("#cv").files[0];

    console.log(type)
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    var metadata = {
        customMetadata: {
            'Nombre': name,
            'Apellido': lastname,
            'Titulo de Trabajo': title,
            'Institucion': inst,
            'Tipo de Trabajo': type,
        }
    };

    document.querySelector(".testbox").innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    fileRef.put(file, metadata).then(function () {
        document.querySelector(".testbox").innerHTML = '<p>Carga de Archivo Terminada.</p>'
    });



});

document.getElementById("institucion").addEventListener('input', (e) => {
    const cosa = document.getElementById("institucion").value;
    if (cosa == "otra") {
        document.getElementById('informacionPaga').innerHTML = `
        <label htmlFor="">Informacion de pago</label>
        <p>
        No. Cuenta: <strong>0102001446</strong> <br/>
        Nombre: <strong>Universidad Politécnica de Aguascalientes</strong><br/>
        Banco: <strong>Bancomer</strong><br/>
        Sucursal: <strong>7703 Gobierno Aguascalientes</strong><br/>
        Clabe: <strong>012010001020014464</strong><br/>
        <br/>
        Deberas enviar tu comprobante de pago a <strong>coloquio2redinags@upa.edu.mx</strong>
        </p>
        `;
    } else {
        document.getElementById('informacionPaga').innerHTML = ``
    }
});
