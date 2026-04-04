-- Write your query below
SELECT DISTINCT c.customer_id, c.customer_name
FROM customers c
LEFT JOIN orders ordersA on ordersA.customer_id = c.customer_id AND ordersA.product_name = 'A'
LEFT JOIN orders ordersB on ordersB.customer_id = c.customer_id AND ordersB.product_name = 'B'
LEFT JOIN orders ordersC on ordersC.customer_id = c.customer_id AND ordersC.product_name = 'C'
WHERE ordersA.order_id IS NOT NULL AND ordersB.order_id IS NOT NULL AND ordersC.order_id IS NULL
ORDER BY c.customer_name;