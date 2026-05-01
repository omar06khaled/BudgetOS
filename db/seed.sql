-- Demo seed data (replace user_id with a real authenticated user UUID before running)
-- This intentionally uses fake financial data only.
insert into accounts (user_id, name, type, balance) values
('00000000-0000-0000-0000-000000000001', 'Checking', 'bank', 12500),
('00000000-0000-0000-0000-000000000001', 'Credit Card', 'credit', -2200);
