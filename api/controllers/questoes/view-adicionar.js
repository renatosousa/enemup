module.exports = {


  friendlyName: 'Adicionar questão',


  description: 'Display "Adicionar" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/questoes/adicionar'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
