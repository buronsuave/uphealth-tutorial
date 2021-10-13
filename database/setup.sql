USE UphealthTutorial

CREATE TABLE [Category] (
    id int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE [UserType] (
    id int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL
);

CREATE TABLE [Product] (
    id int IDENTITY(1, 1) PRIMARY KEY, 
    name varchar(50) NOT NULL, 
    stock int NOT NULL, 
    price int NOT NULL, 
    image varchar(MAX) NOT NULL, 
    category_id int FOREIGN KEY REFERENCES Category(id)
);

CREATE TABLE [User] (
    id int IDENTITY(1, 1) PRIMARY KEY, 
    name varchar(50) NOT NULL, 
    pass varchar(50) NOT NULL, 
    image varchar(MAX) NOT NULL, 
    usertype_id int FOREIGN KEY REFERENCES UserType(id)
);

CREATE TABLE [Record] (
    id int IDENTITY(1, 1) PRIMARY KEY, 
    product_name varchar(50) NOT NULL, 
    product_price varchar(50) NOT NULL, 
    amount varchar(50) NOT NULL, 
    user_name varchar(50) NOT NULL, 
    date date NOT NULL
);