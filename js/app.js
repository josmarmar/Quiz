

function validator(){
let form = document.forms["formulario"]; 
    let question = 5;
    let score = 0;
    const rightAnsw = ["a14", "a23", "a33", "a44", "a52"];

for(var i = 1; i <= question; i++){
    if(form["question" + i].value === "" || form["question" + i].value === null){
        window.alert("Debe responder todas las preguntas");
        
        return false;
        
    }else{
        if(form["question" + i].value === rightAnsw[i-1]){
            score++;
            console.log("Has acertado la pregunta " + i) 
        }
    } 

}




window.alert("Has conseguido " + score +"/5");
return false;
}

// Empecé el proyecto con <div>s, pero el data-value se me hizo un mundo para hacer solo 20 preguntas, así que pasé al formulario. Lo que supuso tener que cambiar el CSS de la pág index.html.

// form.getElementById no funcionó, me hizo cambiar el código de toda la función, cambiar los valores del array rightAnsw porque pensaba que los value no coincidían con el form. La solución fue document.forms[], aunque también me dio dolores de cabeza porque escribí form, sin "s" y estaba haciendo referencia a la variable form.

// Dios bendiga internet por enseñarme el atributo "onsubmit", aunque más tarde de poco me sirvió para evitar el refresco de la página con preventDefault();. Me planteé hasta usar Ajax (no joke). Al final, al menos así me parece, he podido evitar el autorefresco con el window.alert. 



 









































