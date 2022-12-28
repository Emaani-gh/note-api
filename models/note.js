'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init({
    id: {
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    category: DataTypes.STRING,
    content: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Note',
    timestamps:false
  });
  return Note;
};