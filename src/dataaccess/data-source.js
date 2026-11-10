import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
import {config} from "./../config/config.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: config.DATABASE_URL, // Passes the full Supabase connection string
    synchronize: true, // Auto-syncs schema changes (Disable this in production!)
    logging: true,
    entities: [User],
    ssl: {
        rejectUnauthorized: false // Required for Supabase SSL connections
    }
});