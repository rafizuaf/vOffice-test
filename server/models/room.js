'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.RoomUsage, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    roomName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Room name is required'
        },
        notEmpty: {
          msg: 'Room name is required'
        }
      }
    },
    costPerHour: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Cost per hour is required'
        },
        notEmpty: {
          msg: 'Cost per hour is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};