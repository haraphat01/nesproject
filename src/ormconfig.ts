import { ConnectionOptions } from "typeorm";
export const ormconfig: ConnectionOptions = {
    type: "postgres",
  host: "localhost",
  port: 5432,
  username: "mediumclone",
  password: "abekeapo1.",
  database: "mediumclone",
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.entity.ts"]

}
