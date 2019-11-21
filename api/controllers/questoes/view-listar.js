module.exports = {


  friendlyName: 'Listar Questões',


  description: 'Display "Listar" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/questoes/listar'
    }

  },


  fn: async function (inputs, exits) {

    var questoes = [
      {
        identificador: '2018-1AP-MAT-AZUL-180', 
        enunciado:'Segundo as regras da Fórmula 1, o peso mínimo do carro, de tanque vazio, com o piloto, é de 605 kg, e a gasolina deve ter densidade entre 725 e 780 gramas por litro. Entre os circuitos nos quais ocorrem competições dessa categoria, o mais longo é Spa-Francorchamps, na Bélgica, cujo traçado tem 7 km de extensão. O consumo médio de um carro da Fórmula 1 é de 75 litros para cada 100 km. Suponha que um piloto de uma equipe específica, que utiliza um tipo de gasolina com densidade de 750 g/L, esteja no circuito de Spa-Francorchamps, parado no box para reabastecimento. Caso ele pretenda dar mais 16 voltas, ao ser liberado para retornar à pista, seu carro deverá pesar, no mínimo,',
        alternativas: ["668 kg", "717 kg","680 kg","617 kg","689 kg"]
      },
      {
        identificador: '2019-PPL-MAT-AZUL-120', 
        enunciado:'Segundo as regras da Fórmula 1, o peso mínimo do carro, de tanque vazio, com o piloto, é de 605 kg, e a gasolina deve ter densidade entre 725 e 780 gramas por litro. Entre os circuitos nos quais ocorrem competições dessa categoria, o mais longo é Spa-Francorchamps, na Bélgica, cujo traçado tem 7 km de extensão. O consumo médio de um carro da Fórmula 1 é de 75 litros para cada 100 km. Suponha que um piloto de uma equipe específica, que utiliza um tipo de gasolina com densidade de 750 g/L, esteja no circuito de Spa-Francorchamps, parado no box para reabastecimento. Caso ele pretenda dar mais 16 voltas, ao ser liberado para retornar à pista, seu carro deverá pesar, no mínimo,',
        alternativas: ["668 kg", "717 kg","680 kg","617 kg","689 kg"]
      }
    ]
    // Respond with view.
    return exits.success({
        questoes:questoes
    });

  }


};
