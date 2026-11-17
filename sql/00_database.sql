
CREATE DATABASE IF NOT EXISTS arsip_materi
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'arsip'@'localhost'
IDENTIFIED BY 'Belajar123!';

GRANT ALL PRIVILEGES ON arsip_materi.*
TO 'arsip'@'localhost';

FLUSH PRIVILEGES;
