const id = document.getElementById('ids');
const nombre = document.getElementById('nombre');
const passw = document.getElementById('password');



const btnConsultar = document.getElementById('btnConsultar');
const description = document.getElementById('description');

const btnInsertar = document.getElementById('btnInsertar');

const btnConsultarAll = document.getElementById('AllConsultar');

btnConsultar.addEventListener('click', async () => {
  description.innerHTML = '';
	let response = await fetch(`http://localhost:3000/${id.value}`);
	let data = await response.json();
	console.log(data);
	description.innerHTML = `<h1>Nombre: ${data[0].nombre}</h1> <br>
							<h2>PW: ${data[0].password}</h2> <br>
							`
});


function test(id) {
  description.innerHTML = '';
	fetch(`http://localhost:3000/${id}`)
  .then(response => response.json())
  .then(data => description.innerHTML = `<h1>Nombre: ${data[0].nombre}</h1> <br>
  <h2>PW: ${data[0].password}</h2> <br>
  `);
	
}

btnConsultarAll.addEventListener('click', async () => {
  description.innerHTML = '';
  let response = await fetch('http://localhost:3000/');
  let data = await response.json();
  var dataSize = Object.keys(data).length;
  console.log(dataSize);
  console.log(data[1].nombre);
  for(var i = 0; i < dataSize; i++){
     description.innerHTML += `ID: ${data[i].id}
                               Nombre: ${data[i].nombre}
                               PW: ${data[i].password}
     `;
     var btnEliminar = document.createElement('button');
    
     btnEliminar.innerHTML = 'eliminar'; 
     btnEliminar.value = data[i].id; 
     description.appendChild(btnEliminar);
     btnEliminar.setAttribute('onclick', `test(${data[i].id})`);
     
     description.innerHTML += '<br>';
     
  }
  
  
});



btnInsertar.addEventListener('click', () => {
  const response = fetch('http://localhost:3000/add', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({
      'name': nombre.value,
      'pw': passw.value
    }), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
});
  