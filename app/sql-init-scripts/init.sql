CREATE DATABASE IF NOT EXISTS fullcycle;
USE fullcycle;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'qwe123';
FLUSH PRIVILEGES;
CREATE TABLE IF NOT EXISTS PEOPLE (NAME VARCHAR(150));
INSERT INTO PEOPLE VALUES ('DART VADER');