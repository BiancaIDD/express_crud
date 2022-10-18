import { Sequelize } from "sequelize"; 

const db = new Sequelize(
    "nombre_base_datos", //esta base de dataos ya la tenemos creadas "larnu_demo"
    "usuario", //"larnu"
    "contraseña", {
    host: "localhost", //si trabajamos en nuestra computadora solamente
    dialect: 'postgres', //dialecto
    logging: false,
    port: 5432, //es el puerto por defecto, si tenemos otro tenemos que ponerlo, sino dejamos este
    define: {
        timestamps: false //tiene el uso de dos campos createup y updatecreate, nosotros aca ledesimos que no haga eso
    }
});

export default db;