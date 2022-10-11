INSERT INTO "client" ("email", "company") VALUES 
('client1@test.test', 'Company 1'),
('client2@test.test', 'Company 2'),
('client3@test.test', 'Company 3'),
('client4@test.test', 'Company 4'),
('client5@test.test', 'Company 5');

INSERT INTO "employee" ("firstname", "lastname", "email", "password", "role") VALUES 
('Prénom employee 1', 'Nom employee 1', 'employee1@test.test', '1234', 'Admin'),
('Prénom employee 2', 'Nom employee 2', 'employee2@test.test', '1234', 'Lead'),
('Prénom employee 3', 'Nom employee 3', 'employee3@test.test', '1234', 'Intervenor'),
('Prénom employee 4', 'Nom employee 4', 'employee4@test.test', '1234', 'Intervenor'),
('Prénom employee 5', 'Nom employee 5', 'employee5@test.test', '1234', 'Intervenor');

INSERT INTO "ticket" ("title", "content", "status", "client_id") VALUES 
('Titre Ticket 1', 'Ticket content 1', 'Open', 1),
('Titre Ticket 2', 'Ticket content 2', 'Closed', 2),
('Titre Ticket 3', 'Ticket content 3', 'Underway', 3),
('Titre Ticket 4', 'Ticket content 4', 'Open', 4),
('Titre Ticket 5', 'Ticket content 5', 'Open', 5),
('Titre Ticket 6', 'Ticket content 6', 'Underway', 1);

INSERT INTO "message" ("content", "ticket_id", "client_id", "employee_id") VALUES 
('Message content 1', 1, NULL, 1),
('Message content 2', 2, 2, NULL),
('Message content 3', 3, NULL, 3),
('Message content 4', 4, 4, NULL),
('Message content 5', 5, NULL, 5),
('Message content 6', 1, 1, NULL),
('Message content 7', 1, NULL, 1);

INSERT INTO "ticket_employee" ("ticket_id", "employee_id") VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(6, 2);