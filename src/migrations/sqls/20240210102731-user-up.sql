CREATE TABLE IF NOT EXISTS user_info
(
    id            serial8           NOT NULL PRIMARY KEY,
    created_date  timestamp         NOT NULL DEFAULT now(),
    updated_date  timestamp         NOT NULL DEFAULT now(),
    age           varchar(3),
    first_name    varchar           NOT NULL,
    last_name     varchar           NOT NULL,
    email         varchar           NOT NULL,
    phone         varchar,
    password      varchar           NOT NULL
);

INSERT  INTO user_info (age, first_name, last_name, email,phone, password) values('23', 'admin', '1', 'admin1@gmail.com', '9876543210','admin1');



