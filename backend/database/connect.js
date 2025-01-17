const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('semanadiez','root','',{
    host: "localhost",
    dialect: "mysql",
    logging: false,
});


(async () => {
    try{
        await sequelize.authenticate();
        console.log('Conectado a la base de datos');
    }catch(error){
        console.error('Error al conectar a la base de datos', error);
    }
})();

module.exports = sequelize;


