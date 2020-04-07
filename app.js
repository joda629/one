/*
 por ahora insertaremos en el dom, por lo que al refrescar se borraran todos los mensajes
*/


// variable que accede al textarea 
var txt=document.getElementById("txt");


// variables que selecciona al ul 
let ul=document.getElementById("ul");

//variable que accede al btn submit
let btn=document.getElementById("submit");


// ponemos a la escucha nuestro btn submit para que agrege el twiit a la zona de twiits

btn.addEventListener("click", function(e)
{
    // para cuando se de click en el btn no lo envia a niguna lado 
    e.preventDefault();    

    // crearemos el elemento li 
    let li=document.createElement("li");

    // le damos una clase 
    li.classList.add("li");

    // le añadimos el li creado al ul 
    ul.appendChild(li);

    //le mandamos al li el contenido que escribimos
    li.innerHTML=txt.value;

    txt.value="";
});


// cuanndo le den click en la x lo borraremos 

ul.addEventListener("click", function(e)
{
    //evaluamos si al li con la clase li le dieron click le mandamos el confirm 
    if(e.target.classList.contains("li"))
    {
        let msg=confirm("Do you want delete your twiit?");
        // si le dieron aceptar lo eliminamos
        if(msg == true )
        {
            e.target.remove();
        }
    }
});



