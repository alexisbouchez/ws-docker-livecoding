import { DataSource } from "typeorm";
import Skill from "./entities/Skill";
import Wilder from "./entities/Wilder";

// On définit la source de données
const dataSource = new DataSource({
  // On utilise SQLite, mais on pourrait utiliser MySQL, PostgreSQL, etc.
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "replace_in_production_please",
  database: "postgres",

  // On synchronise la base de données avec les entités
  synchronize: true,
  // On définit les entités
  entities: [Wilder, Skill],
});

// On exporte la source de données
export default dataSource;
