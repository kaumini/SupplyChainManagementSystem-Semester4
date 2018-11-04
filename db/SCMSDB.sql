CREATE TABLE users(
  userId int AUTO_INCREMENT,
  email varchar(255) UNIQUE,
  userType enum('customer', 'admin', 'employee' ) NOT NULL,
  hash_ varchar(255) NOT NULL,
  salt varchar(255),
  PRIMARY KEY (userId)
); 

CREATE TABLE customers (
  customerId int(10),
  customerType enum('wholesaler', 'retailer' , 'endcustomer') NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  street varchar(255) NOT NULL,
  num varchar(255) NOT NULL,
  phone INT(10) NOT NULL,
  PRIMARY KEY (customerId),
  FOREIGN KEY (customerId) REFERENCES users(userId)
);




