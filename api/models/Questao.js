/**
 * Questao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identificador: {
      type: 'string',
      required: true,
      unique: true,
      example: '2018-1AP-MAT-AZUL-180; 2019-PPL-CN-ROSA-110'
    },

    textoAssociado: {
      type: 'string',
      required: false,
      unique: false,
    },

    enunciado: {
      type: 'string',
      required: true,
    },

    alternativas: {
      type: 'json',
      columnType: 'array'
    },

    isTemImagem: {
      type: 'boolean',
      required: true
    }

  },

};

