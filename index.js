const prompt = require('prompt-sync')();

const {listarResidencias, adicionarResidencia, atualizarResidencia, removerResidencia} = require('./backend.js');

while (true){

console.log('==Residências==\nO que deseja fazer?\n1. Criar cadastro de residência\n2. Listar residências cadastradas\n3. Editar residência cadastrada\n4. Remover residência cadastrada\n5. Sair do programa')

const opcao = Number(prompt('Digite o número da opção: '));

    switch (opcao) {
        case 1:
        adicionarResidencia();
            break;
        case 2:
        listarResidencias();
            break;
        case 3:
        atualizarResidencia();
            break;
        case 4:
        removerResidencia();
            break;
        case 5:
            console.log('Saindo do sistema.');
            process.exit();
            break;
        default:
            console.log('Opção inválida, tente novamente.')
            break;
    }
};