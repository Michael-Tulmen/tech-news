const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //Define an ID column
        id: {
            // use the special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        //DEFINE A USERNAME COLUMN  
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },    
        //define an email column
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            //there cannot be any duplicate values in this table
            unique: true,
            //if AllowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull:  false,
            validate: {
                //password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        //Pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        //don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored:true,
        // make it so our model name stays lowercase in the database
        modelName:'user'
    }
);

module.exports = User;