const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
            allowNull: true
        },
        season: {
            type: DataTypes.ENUM(['spring', 'summer', 'autumn', 'winter']),
        }
    }, {
        timestamps: false
    });
};