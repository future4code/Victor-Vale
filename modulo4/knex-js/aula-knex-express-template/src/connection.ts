import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "victor-ferreira-do-vale",
      password: "kRRiEvTcvvWfdyHfI8r6",
      database: "carver-victor-ferreira-do-vale",
      multipleStatements: true
   },
});

export default connection