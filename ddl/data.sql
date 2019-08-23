\c growth;

INSERT INTO customers (id, name, email, verified)
VALUES ('ba8793eb-f250-4277-a43c-b9755ed41d5a', 'test verified customer', 'verified@example.com', true);
INSERT INTO customers (id, name, email, verified)
VALUES ('1079b7a8-0454-4b04-b3a6-6e3c5b9d3b00', 'test not verified customer', 'notverified@example.com', false);

INSERT INTO users (id, customer_id, name, email, hash, admin)
VALUES ('2d728ae9-3b75-41eb-ae97-f38c158d4c83', 'ba8793eb-f250-4277-a43c-b9755ed41d5a', 'Fred Joe', 'fred@example.com', '\x2432622431302454466b2e7a2e43395979534354335a7033583633484f592e7a72484b32516535324335364f7577576d67614558766774674e485032', true);
