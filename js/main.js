
function agregarTask(){
	var inputText=document.getElementById("task");/*Traigo el elemento a JS*/
	var container=document.createElement("div");/*Creo el elemento que contiene las tareas*/
	container.setAttribute("class", "tasks");/*Agrego clase al contenedor*/
	document.getElementById("taskList").appendChild(container);/*Agrego el elemento creado a la sección correspondiente*/
	container.innerHTML=inputText.innerHTML;/*Igualo el contenido escrito al contenido en el elemento creado*/
}
