import { DataSource } from "typeorm";

// On définit la source de données
const dataSource = new DataSource({
  // On utilise SQLite, mais on pourrait utiliser MySQL, PostgreSQL, etc.
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  // On définit le chemin vers la base de données.
  // Ici, on utilise désormais PostgreSQL.
  database: "postgres",

  // On synchronise la base de données avec les entités
  synchronize: true,
  // On définit les entités
  entities: ["./src/entities/**.*.ts"],
});

// On exporte la source de données
export default dataSource;
