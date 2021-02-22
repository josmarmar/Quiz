// -----------------vars&const---------------------------

// El formulario
let form = document.getElementById(formulario);

// Las respuestas correctas son:
const rightAnsw = ["China", "Rusia", "Islandia", "Siria", "Argelia"];

// Puntos

let score = 0;

// Validador de respuestas correctas y completas

for(var i = 1; i < rightAnsw.length; i++){
    if(form["question" + i].value = ""){
        window.alert("Debe responder todas las preguntas");
        return false;
    }else{
        if(form["question" + i].value = rightAnsw[i-1]){
            return score++;
        }
    } 

}



// El submit

function formSubmit()
{
    form.submit();
}















// El total de puntos se verá en la parte inferior de la página

let total = document.getElementById("total")
// total.innerHTML pero representado en el DOM de forma pro.

window.alert("Has conseguido " + score +"/5");



























// Pero, todas las preguntas han de ser respondidas! (min6:40)




