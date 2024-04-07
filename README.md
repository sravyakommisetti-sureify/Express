# EsMark-BE

Simple netflix clone built by using nodejs and react.

# creating migrations

db-migrate create migration_name --sql-file ------> creates up.sql and down.sql files in db/migrations

# running migrations

db-migrate up
db-migrate down

# Basic setup

should create a database.json file in src folder

```{
  "dev": {
    "driver": "pg",
    "user": "madhav",
    "password": "madhav",
    "host": "localhost",
    "database": "esmark_local"
  }
}
```
