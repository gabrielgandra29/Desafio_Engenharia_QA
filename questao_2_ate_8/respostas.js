
const pessoas = [];
const primeiroNome = [];



function questao_2()
{
    pessoas.push({ nome:"Fabiana Araújo", age: 33 });
    pessoas.push({ nome:"Gabriel Gomes", age: 25 });
    pessoas.push({ nome:"Fernando Henrique", age: 17 });
    pessoas.push({ nome:"Ana Luiza", age: 2 });
    pessoas.push({ nome:"Geralda do Nascimento", age: 93 });
    pessoas.push({ nome:"Miguel Souza", age: 70 });
    pessoas.push({ nome:"Antonio Miguel", age: 69 });

    
}

function questao_3()
{
    questao_2();
    const entrada = document.getElementById('entrada_questao_3').value;
    
    console.log(verificarNome(entrada));

}

function verificarNome(entrada){
    for (let index = 0; index < pessoas.length; index++) {
        
        if(pessoas[index].nome === entrada){
            let pessoa = pessoas[index];
            return pessoa;
            
        }
    }
}

function questao_4(){
    questao_2();

    for (let index = 0; index < pessoas.length; index++) {
        let pessoa = pessoas[index].nome;      
        let firstName = pessoa.split(" ")[0]; //Foi utilizado o split para capturar somente o  primeiro nome. 
        primeiroNome.push(firstName);
    }

    console.log(primeiroNome);


}

function questao_5(){

}

function questao_6(){
    
}

function questao_7(){
    
}










