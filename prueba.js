//const legOsap = document.getElementsByName('legajo') // legajo o SAP
//const legOsap = document.querySelectorAll('input[name="legajo"]:checked').value
const form = document.querySelector("#forma")        //formulario
//console.log(legOsap)

form.addEventListener("submit", e => {
    let legOsap = document.querySelector('input[name="legajo"]:checked').value
    let datos = {
        legOsap: legOsap
    }

    console.log(legOsap.value)
    let datosString = JSON.stringify(datos)
    localStorage.setItem("datos2",datosString)
});


/*
let renglon1 = document.createElement("p")
renglon1.innerText =
`El que suscribe ${datos.fname} ${datos.lname}`
inscripcion.append(renglon1)

let renglon2 = document.createElement("p")
renglon2.innerText =
`Nacido el ${datos.bday} en ${datos.bdom}    DNI ${datos.dni}`
inscripcion.append(renglon2)

let renglon3 = document.createElement("p")
renglon3.innerText =`CUIT o CUIL ${datos.cuit}, ${datos.legOsap} n° ${datos.leg}`
inscripcion.append(renglon3)

let renglon4 = document.createElement("p")
renglon4.innerText =
`con domicilio particular en ${datos.domP}`
inscripcion.append(renglon4)

let renglon5 = document.createElement("p")
renglon5.innerText =
`de la localidad de ${datos.locP} Pcia. de(C.P ${datos.codpP})Tel ${datos.telP}`
inscripcion.append(renglon5)

let renglon6 = document.createElement("p")
renglon6.innerText =
`con domicilio profesional en ${datos.domL}`
inscripcion.append(renglon6)

let renglon7 = document.createElement("p")
renglon7.innerText =
`de la localidad de ${datos.locL} Pcia. de  (C.P ${datos.codpL}) Tel ${datos.telL}`
inscripcion.append(renglon7)

let renglon8 = document.createElement("p")
renglon8.innerText =
`Celular N° ${datos.cel} mail: ${datos.email}`
inscripcion.append(renglon8)
*/




