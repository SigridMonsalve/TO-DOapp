function agregarTask(){
	var input=document.getElementById("task");/*Traigo el elemento a JS*/
	var container=document.createElement("div");/*Creo el elemento que contiene las tareas*/
	var checkbox=document.createElement('input');/*Creo el tag 'input' que será la casilla*/
	var icon=document.createElement('button');/*Creo el bottón de eliminar*/
	var p=document.createElement('p');/*Creo el tag p que contendrá el texto*/
	var container=document.createElement("div");/*Creo el elemento que contiene las tareas*/
	var checkbox=document.createElement('input');/*Creo el tag 'input' que será la casilla*/
	if (input.value===''){
		alert('Escribe una tarea.')
	}
	else{
	input.innerHTML=input.value;/*El valor del input será ahora el valor de la 'task' a agregar.*/
	document.createElement('p').innerHTML=input.innerHTML;
	container.setAttribute("class", "tasks");
	document.getElementById("taskList").appendChild(container);/*Agrego el elemento creado a la sección correspondiente*/
	p.innerHTML=input.innerHTML;/*Igualo el contenido escrito por el usuario al contenido en el elemento creado*/
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('class','pull-left');
	checkbox.setAttribute('onclick','tachar(this)');
	icon.setAttribute('onclick','eliminarTask(this)');
	p.setAttribute('class','pull-left')
	icon.setAttribute("class", "glyphicon glyphicon-trash pull-right");
	container.appendChild(icon);
	container.appendChild(checkbox);
	container.appendChild(p);/*Esta línea TIENE que estar después de el append checkbox*/
	}
}
function tachar(esto){
	if(esto.hasAttribute('checked')==false){
		var padre=esto.parentNode;
		var p=esto.nextSibling;
		p.setAttribute('style','text-decoration:line-through;');
		padre.setAttribute('style','opacity:0.4;');
		esto.setAttribute('checked','true');
	}
	else{
		var padre=esto.parentNode;
		var p=esto.nextSibling;
		p.setAttribute('style','text-decoration:none;');
		padre.setAttribute('style','opacity:1;');
		esto.removeAttribute('checked')
	}
}
function eliminarTask(esto){
	var padre=esto.parentNode;
	var section=document.getElementById('taskList');
	section.removeChild(padre);
}