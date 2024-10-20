const form = document.getElementById("form-notas");



form.addEventListener('submit', function(e) {
    e.preventDefault();

    let nota1 = document.getElementById('nota1');
    let nota2 = document.getElementById('nota2');
    notaInt1 = parseInt(nota1.value)
    notaInt2 = parseInt(nota2.value)
    
    const menssagem = document.querySelector(".success-message");
    const labelNota1 = document.querySelector("#label-nota1");
    const labelNota2 = document.querySelector("#label-nota2");
    menssagem.style.display = "block"
    labelNota1.innerHTML = `Campo 1 = ${notaInt1}`
    labelNota2.innerHTML = `Campo 2 = ${notaInt2}`

    if (notaInt1 > notaInt2){
        menssagem.innerHTML = 'nota 1 é maior que nota 2'  
        menssagem.style.backgroundColor = "green"
    } else if (notaInt1 === notaInt2) {
        menssagem.innerHTML = 'nota 1 é igual a nota 2'
        menssagem.style.backgroundColor = "orange"
    } else if (notaInt1 < notaInt2) {
        menssagem.innerHTML = 'nota 1 é menor que nota 2'
        menssagem.style.backgroundColor = "red" 
    }
    nota1.value = '';
    nota2.value = '';
});





