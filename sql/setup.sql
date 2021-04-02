DROP TABLE IF EXISTS users, favorites, collections;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR NOT NULL,
    hash VARCHAR NOT NULL,
    user_name VARCHAR NOT NULL
);
CREATE TABLE favorites (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_id VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    images VARCHAR NOT NULL,
    slug VARCHAR NOT NULL,  
    url VARCHAR NOT NULL,
    bitly_url VARCHAR NOT NULL,
    embed_url VARCHAR NOT NULL,
    item_username VARCHAR NOT NULL,
    source VARCHAR NOT NULL,
    source_post_url VARCHAR NOT NULL,
    rating VARCHAR NOT NULL,
    collection_id BIGINT,    
    user_id BIGINT NOT NULL
);
CREATE TABLE collections (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    user_id BIGINT NOT NULL
);
