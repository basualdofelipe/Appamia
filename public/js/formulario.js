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
const modal = document.querySelector("#modal")          //Formulario para imprimir
const volver = document.querySelector("#volver")        //boton para cancelar impresion
const inscripcion = document.querySelector("#ext")      //El div de los datos de la primera pag
const inscripcion2 = document.querySelector("#ext2")    //El div de los datos de la segunda pag

const setear = () =>{
    let datosPh = JSON.parse(localStorage.getItem("datos"));
    let legCheck = document.querySelector('#legajo');
    let sapCheck = document.querySelector('#sap');
    fname.value = datosPh.fname;
    lname.value = datosPh.lname;
    bday.value = datosPh.bday;
    bdom.value = datosPh.bdom;
    dni.value = datosPh.dni;
    cuit.value = datosPh.cuit;
    leg.value = datosPh.leg;
    domP.value = datosPh.domP;
    codpP.value = datosPh.codpP;
    locP.value = datosPh.locP;
    telP.value = datosPh.telP;
    domL.value = datosPh.domL;
    codpL.value = datosPh.codpL;
    locL.value = datosPh.locL;
    telL.value = datosPh.telL;
    cel.value = datosPh.cel;
    matricula.value = datosPh.matricula;
    email.value = datosPh.email;
    serv.value = datosPh.serv;
    servEn.value = datosPh.servEn;    
    datosPh.legOsap == 'SAP' ? sapCheck.checked = true: sapCheck.checked = false
    datosPh.legOsap == 'Legajo' ? legCheck.checked = true: legCheck.checked = false

    
}
if(localStorage.getItem("datos") != null){
    setear()
}



form.addEventListener("submit", (e) => {
    let legOsap = document.querySelector('input[name="legajo"]:checked');
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
    let datosString = JSON.stringify(datos);
    localStorage.setItem("datos", datosString);




    let renglon1 = document.createElement("p")
    renglon1.innerText =
    `El que suscribe: ${datos.fname} ${datos.lname} Nacido el ${datos.bday} en ${datos.bdom} DNI ${datos.dni},

    CUIT o CUIL ${datos.cuit} ${datos.legOsap} n°${datos.leg}.

    Con domicilio particular en ${datos.domP}, De la localidad de ${datos.locP} Pcia. de(C.P ${datos.codpP})Tel ${datos.telP},

    Con domicilio profesional en ${datos.domL} De la localidad de ${datos.locL} Pcia. de  (C.P ${datos.codpL}) Tel ${datos.telL},

    Celular N° ${datos.cel} mail: ${datos.email}`
    inscripcion.append(renglon1)

    let renglon2 = document.createElement("p")
    renglon2.innerText =
    `
    Por la presente, el que suscribe: ${datos.fname} ${datos.lname}

    D.N.I.: ${datos.dni} Matrícula: ${datos.matricula}

    que presta el servicio como ${datos.serv}

    en ${datos.servEn}
    
    presta su consentimiento para que se efectúe la retención requerida por la asociación A.P.P.A.M.I.A

    con Personería Gremial nro. 1.383  otorgada por resolución nro.  287 sobre su  retribución, en un porcentaje de  2%  (dos por ciento).

    De conformidad, se firman dos ejemplares de un mismo tenor, en la ciudad de.....................................................

    en la fecha..............................................................................................………………………………………....
    `

    inscripcion2.append(renglon2)

});

form.addEventListener("submit", () => {
    modal.showModal();
})

volver.addEventListener("click", () =>{
    modal.close();
    inscripcion.innerHTML="";
    inscripcion2.innerHTML="";
})


