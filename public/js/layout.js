let header = document.querySelector('#header-g');
let nav = document.querySelector('#nav-g');
let footer = document.querySelector('#footer-g');


//#nav-g

// LOGO DEL NAV
let logo = document.createElement("img");
logo.src = "../src/img/logo (1).png"
logo.id = "logo"
logo.alt = "logo appamia"
nav.append(logo)

// PAGINAS DEL NAV
class Pagina{
        constructor (href, text){
                this.href = href;
                this.text = text
        }
}

let paginas = []

paginas.push(new Pagina("inicio","Inicio"));
paginas.push(new Pagina("afiliacion","Afiliación"));
paginas.push(new Pagina("beneficios","Beneficios"));
paginas.push(new Pagina("capacitacion","Capacitación"));
paginas.push(new Pagina("noticias","Noticias"));
paginas.push(new Pagina("nosotros","Nosotros"));
paginas.push(new Pagina("contacto","Contacto"));

paginas.map( (elem) =>{
        a = document.createElement("a");
        let href = elem.href
        let text = elem.text
        a.href = `${href}.html`
        a.innerText = text
        nav.append(a);
})

// REDES DEL NAV

let facebookSrc = "../src/img/Redes/facebook.svg"
let twitterSrc = "../src/img/Redes/twitter.svg"
let cgtSrc = "../src/img/cgt_logo.png"

let redes = document.createElement("div");
redes.className = "redes"
let cgtImg = document.createElement("img");
cgtImg.src = cgtSrc
cgtImg.alt = "logo cgt"
nav.append(redes, cgtImg)

let facebookImg = document.createElement("img");
facebookImg.src = facebookSrc
facebookImg.alt = "logo Facebook"

let twitterImg = document.createElement("img");
twitterImg.src = twitterSrc
twitterImg.alt = "logo Twitter"
redes.append(facebookImg,twitterImg)


//header-g

let headerImg = document.createElement("img")
headerImg.src = "../src/img/headerAppamia2.jpg"
header.append(headerImg)


//#footer-g
        
footer.innerHTML = `
        <div class="titulo">
                <img id="logo" src="../src/img/logo (1).png" alt="">
                <h3>ASOCIACIÓN DE PROFESIONALES DEL PROGRAMA </h3>
                <h3>DE ATENCIÓN  MÉDICA INTEGRAL Y AFINES </h3>
                <h6>Personería Gremial Nº 1383 </h6>
        </div>
        <div class="datos">
                <img src="../src/img/Footer/mail.png" alt=""><p>appamia@speedy.com.ar </p>
                <img src="../src/img/Footer/telefono.png" alt=""><p>Tel/Fax 4861-0009<br/>líneas rotativas </p>
                <a href="https://goo.gl/maps/fxRi2BKH4kur1GBd9" target="_blank"><img src="../src/img/Footer/map.png" alt=""></a><p>Av. Belgrano 3569 (1210) Capital Federal </p>            
        </div>`
