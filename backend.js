const prompt = require('prompt-sync')();

let residencias = [
    {
      id: 1,
      bairro: "Centro",
      rua: "Rua Jequitiba",
      numero: 71,
      moradores: ["Pedro", "Matheus"],
    },
    {
      id: 2,
      bairro: "Centro",
      rua: "Rua 2",
      numero: 72,
      moradores: ["Maria", "João"],
    },
    {
      id: 3,
      bairro: "Uvaranas",
      rua: "Rua Tamandaré",
      numero: 10,
      moradores: ["Ana", "José", "Paulo"],
    },
];

let ultimoId = 4;

const modelo = (id = ultimoId++) => {
    const bairro = prompt('Qual o bairro da residência: ');
    const rua = prompt('Qual a rua da residência: ');
    const numero = prompt('Qual o número da residência: ');
    const moradores = [];    

        while (true){
        let morador = prompt('Digite os moradores desta residência. Quando finalizar, digite 0 para Sair: ');

        if(morador == 0){
            break;
        } else {
            moradores.push(morador)
        }
    };  

    if (bairro.length >= 3 && rua.length >= 3 && numero.length >= 1 && moradores.length >= 1){
       
        if(id === undefined){
            return {bairro, rua, numero, moradores, id:ultimoId}
        }
        else{
           return {bairro, rua, numero, moradores, id}
        }
    } else {
        console.log('Dados inválidos.')
        ultimoId--;
    }
};

const adicionarResidencia = () => {
    let residencia = modelo();
    
    if (residencia != undefined){
       residencias.push(residencia)
       console.log('Residência criada com sucesso.');
    }
};

function listarResidencias() {
    residencias.forEach((residencia) => {
      console.log(
        `ID: ${residencia.id}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
      );
      residencia.moradores.forEach((morador, indice) => {
        console.log(`Morador ${indice + 1}: ${morador}`);
      });
    });
};
  

const atualizarResidencia = () => {
    listarResidencias();

    const id = parseInt(prompt('Qual id de residência deseja alterar: '));

    let novo = modelo(id)

    const indice = residencias.findIndex(residencia => id == residencia.id);

    if (indice != -1){
        residencias[indice] = novo
        console.log('Residência alterada.')
    } else {
        console.log('Residência não localizada.')
    }
};

const removerResidencia = () => {
    listarResidencias();

    const id = parseInt(prompt('Qual id de residência deseja remover: '));
    
    const indice = residencias.findIndex(residencia => id == residencia.id);

    if (indice != -1){
        residencias.splice(indice, 1)
        console.log('Residência removida.')
    } else {
        console.log('Residência não localizada.')
    }
};

  module.exports = {listarResidencias, adicionarResidencia, atualizarResidencia, removerResidencia};
  