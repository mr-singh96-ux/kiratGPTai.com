import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials:{
    url: 'postgresql://neondb_owner:npg_1WXzdHvake9b@ep-autumn-sunset-a8fq0pcc-pooler.eastus2.azure.neon.tech/AI-Content-Generator?sslmode=require'
  }
});
