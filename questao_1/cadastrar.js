
const recebeCliente = [
    {
        nomeCliente:"",
        emailCliente:"",
        profissaoCliente: "",
        idadeCliente: "",
        telefoneCliente: "",
        dataPreenchimentoCliente: ""
    }
];

window.onload = function()
{
    document.getElementById("btnCadastrar").addEventListener("click", salvar);
}

function salvar() 
{
    exibirDados(); //executando função que vai ler os dados e salvar dentro do objeto cliente, e exibir na tela
}

function exibirDados() 
{
    //pegando dados
    recebeCliente.nomeCliente = $('#nome').val();
    recebeCliente.emailCliente = $('#email').val();
    recebeCliente.profissaoCliente = $('#profissao').val();
    recebeCliente.idadeCliente = $('#idade').val();
    recebeCliente.telefoneCliente = $('#telefone').val();
    recebeCliente.dataPreenchimentoCliente = $('#data').val();

    //atribuindo informações aos inputs para serem exibidos
    $("#nomeMotorista").val(recebeCliente.nomeCliente);
    $("#idadeMotorista").val(recebeCliente.idadeCliente);
    $("#emailMotorista").val(recebeCliente.emailCliente);
    $("#dataMotorista").val(recebeCliente.dataPreenchimentoCliente);
    $("#profissaoMotorista").val(recebeCliente.profissaoCliente);
    $("#telefoneMotorista").val(recebeCliente.telefoneCliente);

    
    $("#exibirDados").css("display","block");
    $("#formCadastro").css("display", "none");
}

