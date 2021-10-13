USE UphealthTutorial
GO 

SET IDENTITY_INSERT [Category] OFF;  
GO

INSERT INTO [Category] (name) VALUES 
('Vitamins and minerals' ),
('Herbal Remedies'), 
('Homeophatic medicines'), 
('Traditional medicines'),
('Probiotics'),
('Others');

SET IDENTITY_INSERT [UserType] OFF;
GO

INSERT INTO [UserType] (name) VALUES 
('Admin'), 
('Client'), 
('Programmer'), 
('Storer');

SET IDENTITY_INSERT [Product] OFF;
GO

INSERT INTO [Product] (name, stock, price, image, category_id) VALUES
('Vitamin A', 100, 7, 'https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/04/vitamins-26622_1280.jpg', 1), 
('Vitamin B', 100, 7, 'https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/04/vitamins-26622_1280.jpg', 1), 
('Vitamin C', 100, 7, 'https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/04/vitamins-26622_1280.jpg', 1), 
('Seed Daily Synbiotic', 50, 8, 'https://images-na.ssl-images-amazon.com/images/I/51tVAOQeOUL._SX286_BO1,204,203,200_.jpg', 2), 
('Hawthorn Blend 4Oz', 20, 10, 'https://images-na.ssl-images-amazon.com/images/I/51tVAOQeOUL._SX286_BO1,204,203,200_.jpg', 2);

SET IDENTITY_INSERT [User] OFF;
GO

INSERT INTO [User] (name, pass, image, usertype_id) VALUES
('david', 'brunitosuavecito', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 1), 
('oscar', 'brunitosuavecito', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 2), 
('mel', 'brunitosuavecito', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 3),
('ever', 'brunitosuavecito', 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg', 4);



