DROP TABLE IF EXISTS users, contacts;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    hash TEXT NOT NULL,
    user_name TEXT NOT NULL
);
CREATE TABLE favorites (
    id TEXT ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    images OBJECT NOT NULL,
    slug TEXT NOT NULL,  
    url TEXT NOT NULL,
    bitly_url TEXT NOT NULL,
    embed_url TEXT NOT NULL,
    username TEXT NOT NULL,
    source TEXT NOT NULL,
    source_post_url TEXT NOT NULL,
    rating TEXT NOT NULL,
    collection BIGINT,    
    user_id BIGINT NOT NULL
);
CREATE TABLE collections (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    user_id BIGINT NOT NULL
);
