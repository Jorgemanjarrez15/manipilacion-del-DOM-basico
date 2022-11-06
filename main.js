/*const h1 = document.querySelector('h1');
const pid = document.querySelector('#parrafo')

h1.innerText = 'Jorge manjarrez';

//crear un elemto en html desde js
const img = document.createElement('img');
//a img le agregamos el atributo src y su valor que este caso es la url
img.setAttribute('src','url');

// borrar el contenido del parrafo
pid.innerHTML = '';
//lo agregamos a una equite o contenedor append loa grega despues de su contenido
pid.append('img')
console.log(h1.nodeValue);*/

//eventos
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcular)

function calcular() {
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = sumaInputs;
}