var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          created_at: {
            type: DataTypes.DATE
          },
          updated_at: {
            type: DataTypes.DATE
          },
        comments: DataTypes.STRING,
        author_id: DataTypes.INTEGER,
        parent_id : DataTypes.INTEGER
    });

    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          created_at: {
            type: DataTypes.DATE
          },
          updated_at: {
            type: DataTypes.DATE
          },
        name: DataTypes.STRING
    });
};