

//boton1
function myFunction()  {
    ocultarcontacto.classList.toggle('mostrarcontacto');
}

//boton2

let readMore_btn = document.getElementById('boton');
let hideText = document.getElementById('ocultarText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('mostrartext');

  if(hideText.classList.contains('mostrartext')) {
    readMore_btn.innerHTML = 'Mostrar menos'
  }
  else {
    readMore_btn.innerHTML = 'Mostrar mas'
  }
}

//movimiento de letras

var i = 0;
var txt = 'Mi Perfil.';
var speed = 170;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter ();


var o = 0;
      var texto = 'Mis Experiencias.';
      
      function type() {
        if (o < texto.length) {
          document.getElementById("demo2").innerHTML += texto.charAt(o);
          o++;
          setTimeout(type, speed);
        }
      }
      type ();



      var a = 0;
      var texto2 = 'Mis Habilidades.';
      
      function types() {
        if (a < texto2.length) {
          document.getElementById("demo3").innerHTML += texto2.charAt(a);
          a++;
          setTimeout(types, speed);
        }
      }
      types ();


      var b = 0;
      var texto3 = 'Mis Fortalezas.';
      
      function titul() {
        if (b < texto3.length) {
          document.getElementById("demo4").innerHTML += texto3.charAt(b);
          b++;
          setTimeout(titul, speed);
        }
      }
      titul ();



