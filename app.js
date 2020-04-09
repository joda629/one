/*
 por ahora insertaremos en el dom, por lo que al refrescar se borraran todos los mensajes
*/


// variable que accede al textarea 
let txt=document.getElementById("txt");


// variables que selecciona al ul 
let ul=document.getElementById("ul");

//variable que accede al btn submit
let btn=document.getElementById("submit");
let li, twt;

// ponemos a la escucha nuestro btn submit para que agrege el twiit a la zona de twiits

document.addEventListener("DOMContentLoaded", show);

btn.addEventListener("click", function(e)
{
    e.preventDefault();


    twt=txt.value;
  
    agregar(twt);

});



// 1 se verifica si hay algo en localstorage
//obtenemos los twiis del localstorage
function getTwt()
{
    let twts;

    // revisar valores localStorage 

    // si en localstorage no hay nada, crea un array

    if(localStorage.getItem("Twiit") === null)
    {
        twts= [];
    }
    else 
    {
        //si encuentra algo lo pasa a la variable twts en forma de json 
        twts= JSON.parse(localStorage.getItem("Twiit"));
    }

    return twts;
}

// 2 se agregan al localstorage
// add to localStorage
// recibe por parametro la variable twt que contiene lo que el user escribio en el input
function agregar(twt)
{
    let twts;
    twts=getTwt();

    // add localStorage
    twts.push(twt);

    localStorage.setItem("Twiit", JSON.stringify(twts));
}

// muestrar los datos del localstorage
function show()
{
    let twts;

    twts= getTwt();

    twts.forEach(function(tw)
    {

        // crearemos el elemento li 
        li=document.createElement("li");

        // le damos una clase 
        li.classList.add("li");
        //le mandamos al li el contenido que escribimos
        li.innerText = tw;

        // le añadimos el li creado al ul 
        ul.appendChild(li);

        txt.value= "";

    });

}




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
            borrar(e.target.textContent);
        }
    }
});

//borrar de localstorage
function borrar(twt)
{
    let twts, nuevoTwt;

    // se crea una nueva cadena cuando le hemos creado tags dentro del li con esto las eliminamos
    //nuevoTwt = twt.substring(0,twt.length);

    twts= getTwt();

    twts.forEach(function(tw, index)
    {
        if(twt === tw)
        {
            twts.splice(index , 1);
        }
    });

    localStorage.setItem("Twiit", JSON.stringify(twts))
}




//localStorage.setItem("name", "joda");
//localStorage.removeItem("name");
//console.log(localStorage.getItem("name"));