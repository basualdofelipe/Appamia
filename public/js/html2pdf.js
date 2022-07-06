const element = document.getElementById('element-to-print');
const imprimir = document.querySelector("#imprimir")    //boton para imprimir formulario

let opt = {
  margin:       1,
  filename:     'Planilla de Inscripcion.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 3 },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

imprimir.addEventListener("click", () =>{
  html2pdf().set(opt).from(element).save();
})