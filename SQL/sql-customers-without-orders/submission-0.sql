-- Write your query below
SELECT customers.name
FROM customers 
LEFT JOIN orders on customers.id = orders.customer_id
WHERE orders.id IS NULL