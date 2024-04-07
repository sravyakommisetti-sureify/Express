CREATE TABLE IF NOT EXISTS master_movies_shows (
    show_id VARCHAR,
    type VARCHAR,
    title VARCHAR,
    director VARCHAR,
   "cast" VARCHAR[],
   country VARCHAR,
    date_added DATE,
    release_year INTEGER,
    rating VARCHAR,
    duration VARCHAR,
    listed_in VARCHAR[],
    description VARCHAR
);