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


