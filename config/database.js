import { Sequelize } from "sequelize"; 
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME, //esta base de dataos ya la tenemos creadas "larnu_demo"
    process.env.DB_USER, //"larnu"
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, //si trabajamos en nuestra computadora solamente
    dialect: 'postgres', //dialecto
    logging: false,
    port: process.env.DB_PORT, //es el puerto por defecto, si tenemos otro tenemos que ponerlo, sino dejamos este
    define: {
        timestamps: false //tiene el uso de dos campos createup y updatecreate, nosotros aca ledesimos que no haga eso
    }
});

export default db;