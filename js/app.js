// -----------------vars&const---------------------------

// El formulario
let form = document.getElementById(formulario);

// Las respuestas correctas son:
const rightAnsw = ["China", "Rusia", "Islandia", "Siria", "Argelia"];

// Puntos

let score = 0;

for(var 1 = 1; i < rightAnsw.length; i++){
    if(form[question + i]).value = ""){
        window.alert("La pregunta" + i + "está sin responder");

    } 

}



















// El total de puntos se verá en la parte inferior de la página

let total = document.getElementById("total")
// total.innerHTML pero representado en el DOM de forma pro.

window.alert("Has conseguido " + score +"/5");



























// Pero, todas las preguntas han de ser respondidas! (min6:40)




