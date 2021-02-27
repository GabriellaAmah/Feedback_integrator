CREATE TABLE IF NOT EXISTS `user` (
    id int(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    passKey varchar(255) UNIQUE NOT NULL
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;