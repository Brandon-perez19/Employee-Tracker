INSERT INTO department (name)
VALUES 
('Kids'),
('Mens'),
('Womens'),
('Home'),
('Dresses'),
('Logistics');

INSERT INTO roles (title, salary, department_id)
VALUES
('Kids Clothing Associate', 32000, 1),
('Kids Shoes Associate', 32000, 1),
('Kids Assistant Manager', 36000, 1),
('Kids Manager', 40000, 1),
('Mens Clothing Associate', 36000, 2),
('Mens Shoe Associate', 38000, 2),
('Mens Assistant Manager', 42000, 2),
('Mens Manager', 46000, 2),
('Womens Clothing Associate', 36000, 3),
('Womens Shoes Associate', 40000, 3),
('Womens Assistant Manager', 44000, 3),
('Womens Manager', 48000, 3),
('Home Sales Associate', 34000, 4),
('Home Assistant Manager', 38000, 4),
('Home Manager', 42000, 4),
('Dress Sales Associate', 36000, 5),
('Dress Assistant Manager', 40000, 5),
('Dress Manager', 44000, 5),
('Logistics Processor', 36000, 6),
('Logistics Assistant Manager', 42000, 6),
('Logistics Manager', 46000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('James', 'Fraser', 1),
    ('Jack', 'London', 2),
    ('Robert', 'Bruce', 3),
    ('Peter', 'Greenaway', 4),
    ('Derek', 'Jarman', 5),
    ('Paolo', 'Pasolini', 6),
    ('Heathcote', 'Williams', 7),
    ('Sandy', 'Powell', 8),
    ('Emil', 'Zola', 9),
    ('Sissy', 'Coalpits', 10),
    ('Antoinette', 'Capet', 11),
    ('Samuel', 'Delany', 12),
    ('Tony', 'Duvert', 13),
    ('Dennis', 'Cooper', 14),
    ('Monica', 'Bellucci', 15),
    ('Samuel', 'Johnson', 16),
    ('John', 'Dryden', 17),
    ('Alexander', 'Pope', 18),
    ('Lionel', 'Johnson', 19),
    ('Aubrey', 'Beardsley', 20),
    ('Tulse', 'Luper', 21);
