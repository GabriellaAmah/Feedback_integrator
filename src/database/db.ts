import fs from "fs";
import mysql, { ConnectionConfig, MysqlError } from "mysql";
import path from "path";

class Database {
  private connection;

  constructor({ host, user, password, database }: ConnectionConfig) {
    this.connection = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });

    this.createConnect();
  }

  createConnect() {
    return this.connection.query(
      fs.readFileSync(path.join(__dirname, "query.sql"), { encoding: "utf-8" }),
      (err: MysqlError) => {
        if (err) return console.log("an error occurred in the DB" + err);
        console.log('database connects')
      }
    );
  }
}

export default Database;
