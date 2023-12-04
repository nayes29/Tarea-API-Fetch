console.log( "Tarea JS07-API Fetch");
//variables
const url= 'https://reqres.in/api/users?delay=3';
const respuesta = document.querySelector("#respuesta")

//evento 
document.addEventListener("DOMContentLoaded", llamarAPI);


//llamando a la API

async function llamarAPI(){
    const respuesta = await fetch (url)
    const data = await respuesta.json()
    mostrarHTML(data)
     
}

function mostrarHTML(datos){
    
    datos.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.first_name}</td>
        <td>${item.last_name}</td>
        <td>${item.email}</td>
        <td>${item.avatar}</td>
        `
        respuesta.appendChild(row)
    });
} 







