create TABLE persone {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
}

create TABLE products {
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    img VARCHAR(255),
    category VARCHAR(50),
    type VARCHAR(50),
    rating DECIMAL(1, 1)
}

create TABLE orders {
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREING KEY (user_id) REFERENCES persone (id)
}