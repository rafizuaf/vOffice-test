'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoomUsage.belongsTo(models.Client, { foreignKey: 'clientId' });
      RoomUsage.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  RoomUsage.init({
    clientId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Client id is required'
        },
        notEmpty: {
          msg: 'Client id is required'
        }
      }
    },
    roomId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Room id is required'
        },
        notEmpty: {
          msg: 'Room id is required'
        }
      }
    },
    startTime: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Start time is required'
        },
        notEmpty: {
          msg: 'Start time is required'
        }
      }
    },
    endTime: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'End time is required'
        },
        notEmpty: {
          msg: 'End time is required'
        }
      }
    },
    bookingDate: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: {
          msg: 'Booking date is required'
        },
        notEmpty: {
          msg: 'Booking date is required'
        }
      }
    },
    quotaUsed: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Quota used is required'
        },
        notEmpty: {
          msg: 'Quota used is required'
        }
    }
  }, 
    sequelize,
    modelName: 'RoomUsage',
  });
  return RoomUsage;
};