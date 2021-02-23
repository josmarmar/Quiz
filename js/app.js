// -----------------vars&const---------------------------

// El formulario
// let form = document.getElementById(formulario);

// Las respuestas correctas son:
// const rightAnsw = ["a14", "a23", "a33", "a44", "a52"];

// Puntos

// let score = 0;

// Validador de respuestas correctas y completas

function validator(){
let form = document.forms["formulario"]; 
    let question = 5;
    let score = 0;
    const rightAnsw = ["a14", "a23", "a33", "a44", "a52"];

for(var i = 1; i <= question; i++){
    if(form["question" + i].value === "" || form["question" + i].value === null){
        window.alert("Debe responder todas las preguntas");
        console.log("Has fallado la pregunta " + i)
        return false;
    }else{
        if(form["question" + i].value === rightAnsw[i-1]){
            score++;
            console.log("Has acertado la pregunta " + i) //No allrite...
        }
    } 

}

window.alert("Has conseguido " + score +"/5");
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











































