-- Write your query below
SELECT c.customer_id, c.customer_name
FROM customers c
LEFT JOIN orders ON orders.customer_id = c.customer_id
GROUP BY c.customer_id, c.customer_name
HAVING
    COUNT(*) FILTER (WHERE orders.product_name = 'A') > 0
    AND COUNT(*) FILTER (WHERE orders.product_name = 'B') > 0
    AND COUNT(*) FILTER (WHERE orders.product_name = 'C') = 0
ORDER BY c.customer_name;