// -----------------vars&const---------------------------

// El formulario
let form = document.getElementById(formulario);

// Las respuestas correctas son:
const rightAnsw = ["China", "Rusia", "Islandia", "Siria", "Argelia"];

// Puntos

let score = 0;

// Validador de respuestas correctas y completas

function validator(){
   

for(var i = 1; i <= rightAnsw.length; i++){
    if(form["question" + i].value === "" || form["question" + i].value === null){
        window.alert("Debe responder todas las preguntas");
        return false;
    }else{
        if(form["question" + i].value === rightAnsw[i-1]){
            score++;
            console.log("AllRite")
        }
    } 

}
return false;
}

// El submit

// function formSubmit()
// {
//     form.submit();
// }


// NonAutoRefresh

// let btn = document.getElementById("submitbtn");

// btn.addEventListener("click", function(removEvent) {removEvent.preventDefault();});

// y no funciona, y sigue sin funcionar












// El total de puntos se verá en la parte inferior de la página

let total = document.getElementById("total")
// total.innerHTML pero representado en el DOM de forma pro.

window.alert("Has conseguido " + score +"/5");






























