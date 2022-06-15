const inscripcion = document.querySelector("#ext")
const inscripcion2 = document.querySelector("#ext2")

let datos = JSON.parse(localStorage.getItem("datos"));


let renglon1 = document.createElement("p")
renglon1.innerText =
`El que suscribe: ${datos.fname} ${datos.lname} Nacido el ${datos.bday} en ${datos.bdom} DNI ${datos.dni},

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


