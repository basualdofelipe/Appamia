const fname = document.querySelector("#fname")          //nombre
const lname = document.querySelector("#lname")          //apellido
const bday = document.querySelector("#bday")            //fecha de nacimiento
const bdom = document.querySelector("#bdom")            //lugar de nacimiento
const dni = document.querySelector("#dni")              //dni
const cuit = document.querySelector("#cuit")            //cuit
const leg = document.querySelector("#leg")              //legajo n°
const domP = document.querySelector("#dom-p")           //domicilio particular
const codpP = document.querySelector("#codp-p")         //código postal particular
const locP = document.querySelector("#loc-p")           //localidad dom particular
const telP = document.querySelector("#tel-p")           //telefono particular
const domL = document.querySelector("#dom-l")           //domicilio laboral
const codpL = document.querySelector("#codp-l")         //código poostal laboral
const locL = document.querySelector("#loc-l")           //localidad dom laboral
const telL = document.querySelector("#tel-l")           //telefono laboral
const cel = document.querySelector("#cel")              //celular
const email = document.querySelector("#email")          //email
const serv = document.querySelector("#serv")            //servicio que brinda
const servEn = document.querySelector("#serv-en")       //donde brinda servicios
const matricula = document.querySelector("#matricula")  //matricula n°
const form = document.querySelector("#form")            //formulario



form.addEventListener("submit", () => {
    let legOsap = document.querySelector('input[name="legajo"]:checked')
    let datos = {
        fname: fname.value,
        lname: lname.value,
        bday: bday.value,
        bdom: bdom.value,
        dni: dni.value,
        cuit: cuit.value,
        legOsap: legOsap.value,
        leg: leg.value,
        domP: domP.value,
        codpP: codpP.value,
        locP: locP.value,
        telP: telP.value,
        domL: domL.value,
        codpL: codpL.value,
        locL: locL.value,
        telL: telL.value,
        cel: cel.value,
        matricula: matricula.value,
        email: email.value,
        serv: serv.value,
        servEn: servEn.value
    }
    let datosString = JSON.stringify(datos)
    localStorage.setItem("datos",datosString)
});




