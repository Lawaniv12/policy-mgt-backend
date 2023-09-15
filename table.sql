create table user (
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(20),
    status varchar (20),
    role varchar (20),
    UNIQUE (email)
);

-- to view table 

-- use policymgt; 

-- to view table fieds

-- select *from user 

insert into user(name, contactNumber, email, password, status, role ) values ('Admin', '123456788092', 'admin@gmail.com', 'admin', 'true', 'admin');




create table categories (
    categoryID int primary key AUTO_INCREMENT,
    categoryName varchar(300) UNIQUE NOT NULL,
   
);

create table file (
    fileId int primary key AUTO_INCREMENT,
    name varchar(255) NOT NULL, 
    categoryId integer NOT NULL,
    description varchar(255),
    userId integer NOT NULL,
    status varchar(20),
    filePath varchar(255),
    uploadDate DATETIME,
    
);