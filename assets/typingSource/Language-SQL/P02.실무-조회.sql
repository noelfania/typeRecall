-- ============================================================
-- P02. SQL 실무 조회 패턴
-- ============================================================

-- 조건 묶기[condition grouping]
SELECT user_name
FROM users
WHERE user_age >= 20
  AND user_name LIKE 'k%';
-- 결과: kim

-- 범위 조회[between]
SELECT user_name
FROM users
WHERE user_age BETWEEN 20 AND 30;
-- 결과: 20~30 사이 사용자

-- 포함 조회[in]
SELECT user_name
FROM users
WHERE user_id IN (1, 3, 5);
-- 결과: 지정한 id만 조회

-- 널 처리[null handling]
SELECT user_name, COALESCE(user_age, 0) AS safe_age
FROM users;
-- 결과: null이면 0 대체

-- 왼쪽 조인[left join]
SELECT u.user_name, o.total_price
FROM users u
LEFT JOIN orders o
  ON u.user_id = o.user_id;
-- 결과: 주문 없는 사용자도 포함

-- 그룹 조건[having]
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 1;
-- 결과: 주문 1개 이상 사용자

-- 케이스[case]
SELECT user_name,
       CASE
           WHEN user_age >= 30 THEN 'senior'
           ELSE 'junior'
       END AS age_group
FROM users;
-- 결과: 조건에 따라 문자열 분기
