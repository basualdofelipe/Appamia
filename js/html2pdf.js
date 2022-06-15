const element = document.getElementById('element-to-print');
let opt = {
  margin:       1,
  filename:     'Planilla de Inscripcion.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 3 },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};



// New Promise-based usage:
function imprimir(){
    html2pdf().set(opt).from(element).save();
}
