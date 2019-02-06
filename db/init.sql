
Drop table if exists ProductImgs;
Drop table if exists OrderDetails;
Drop table if exists Orders;
Drop table if exists Customer;
Drop table if exists Product;
Drop table if exists Category;

Create table Category(
  CategoryId serial primary key,
  CategoryName text,
  Parent int
);

Create table Product(
  ProductId serial primary key,
  ProductName text,
  Description text,
  Price integer,
  CategoryId int,
  FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId)
);

Create table Customer(
  CustomerId serial primary key,
  Auth0Id int,
  FirstName text,
  LastName text,
  Email text,
  Phone text,
  ShippingAddress text,
  shippingCity text,
  ShippingState text,
  ShippingZip int
);

Create table ProductImgs(
  ImgId serial primary key,
  ProductId int, 
  Url text,
  FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);

Create table Orders(
  OrderId serial primary key,
  CustomerId int,
  CreatedDate TimeStamp,
  ModifiedDate TimeStamp,
  Fulfilled TimeStamp,
  Paid boolean,
  Deleted boolean,
  total integer,
  tax integer,
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);

Create table OrderDetails(
  DetailId serial primary key,
  OrderId int,
  FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
);

insert into Category
(CategoryName, Parent)
Values
('Glassware', null),
('Corkcicle', null),
('Beer', 1),
('Martini', 1),
('Wine', 1),
('Growlers', 1),
('Tumblers', 2),
('Canteen', 2),
('Stemless', 2),
('Bar Accessories', 1),
('Corkcicle Accessories', 2);

Insert into Product
(ProductName, Description, Price, CategoryId)
Values
('Bow Down', 'For that special lady who proudly wears the crown! This gorgeous wine glass is embellished with smoky blues, silver, clear crystals and a rhinestone studded crown.', 45.00, 5)

insert into ProductImgs
(productId, url)
Values
(1, 'https://res.cloudinary.com/dclawygaw/image/upload/v1549325224/Bow_Down_large.png'),
(1, 'https://res.cloudinary.com/dclawygaw/image/upload/v1549325224/Bow_Down_Base_compact.jpg')