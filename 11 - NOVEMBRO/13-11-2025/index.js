function displayRadioValue(){
    var elemento = document.getElementsByName('gender');

    for(i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById('result').innerHTML
                = 'Genero: '+elemento[i].value;
        }       
    }
}

function getOption(){
    var selectElement = document.querySelector('#select-planos');
    var output = selectElement.value;

    document.querySelector('#output').textContent = output;
}

function getCheckedBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');   
    let text = "";

    for(i = 0; i < checkBoxes.length; i++){
        text = `${text}, ${checkBoxes[i].value}`;
    }

    document.getElementById('prioridades').innerHTML = text;
}































function socorro(){
    var quadrado = document.getElementById("alerta");
    
    quadrado.style.width="300px";
    quadrado.style.height="300px";


    quadrado.classList.add('bg-danger')

}
