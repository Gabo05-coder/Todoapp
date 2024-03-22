const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// basicamente aca esta toda la logica de los botones para crear y borrar tareas... tambien para marcarlas como hechas y guardar los cambios para mostrarlos siempre.
function addTask() {
    if(inputBox.value === '') {         // funcion para añadir tares
        alert ("You must write something!"); // si no escribes nada te regresa un mensaje de advertencia
    }
    else{
        let li = document.createElement("li"); // si escribes lo despliega como tarea
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData() { //con esta se guardan los cambios, es decir si añadimos tareas o si borramos queda como lo dejamos
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){ //aca mostramos todo lo que se guardo o no se borro y decidimos recargar la pagina o cerrarla para volver a abrirla
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask(); //aca se inicializa la funcion showtask ^ 

