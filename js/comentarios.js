function nComentario(){
    let li = document.createElement("li")
    let valorIngresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if(valorIngresado === '')
    {
        alert("Ingrese un comentario")
    }
    else{
        document.getElementById("comentarios").appendChild(li);
        alert("Comentario Agregado");
    }

    document.getElementById("nuevoComentario").value="";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "clase";
    li.appendChild(borrar);

    let clase = document.getElementsByClassName("clase");
    let i;
    for (i= 0; i<clase.length;i++){
        clase[i].onclick = function(){
            let div = this.parentElement;
            div.style.display="none";
            alert("Comentario Borrado");
        }
    }
}