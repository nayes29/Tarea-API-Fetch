console.log("Local storage");


//Obtenerr la referencia del form
const registerForm = document.forms["user-form"];

//Acción del evento Submit INICIO
registerForm.addEventListener("submit", (event) => {
  //Evita el comportameinto predeterminado asociado a un evento
  event.preventDefault();

  //definición de un Objeto para leer los datos del form
  const user = {
    name: registerForm.elements["name"].value, 
    job: registerForm.elements["job"].value,
  };
  enviarDatosAlServidor(user);
});

const enviarDatosAlServidor = (user) => {
  // localStorage.setItem: los datos persisten almacenados entre 
  // de las diferentes sesiones de navegación
  // JSON.stringify: Convierte un objeto en una cadena de texto con formato JSON
  localStorage.setItem( "userData" ,  JSON.stringify( user ) );
   
    
  console.table(user);
};


const setName = ( name ) => document.getElementById("name").value = name; 
const setJob = ( job ) => document.getElementById("job").value = job; 

(function inicializacion(){
    // JSON.parse : Analiza un texto en formato JSON y lo transforma en un objeto
    const localStorageUsarData = localStorage.getItem( "userData" );

    if ( localStorageUsarData !== null ){
        const user = JSON.parse( localStorageUsarData );
        setName( user.name );
        setJob( user.job );
    }

})();