-- ============================================================
-- P01. SQL 기본 패턴
-- ============================================================

-- 테이블 생성[create table]
CREATE TABLE users (
    user_id      INTEGER PRIMARY KEY,
    user_name    VARCHAR(50),
    user_age     INTEGER,
    created_at   DATE
);

-- 데이터 추가[insert]
INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (1, 'kim', 30, DATE '2026-03-18');

INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (2, 'lee', 25, DATE '2026-03-18');

-- 조회[select]
SELECT *
FROM users;
-- 결과:
-- 1, kim, 30, 2026-03-18
-- 2, lee, 25, 2026-03-18

-- 조건 조회[where]
SELECT user_name, user_age
FROM users
WHERE user_age >= 30;
-- 결과:
-- kim, 30

-- 정렬[order by]
SELECT user_name, user_age
FROM users
ORDER BY user_age DESC;
-- 결과: 나이 내림차순

-- 개수 제한[limit]
SELECT *
FROM users
ORDER BY user_id
FETCH FIRST 1 ROWS ONLY;
-- 결과: 첫 행 1개

-- 수정[update]
UPDATE users
SET user_age = 31
WHERE user_id = 1;

-- 삭제[delete]
DELETE FROM users
WHERE user_id = 2;

-- 집계[aggregate]
SELECT COUNT(*) AS user_count,
       AVG(user_age) AS avg_age
FROM users;
-- 결과: 1, 31

-- 그룹화[group by]
SELECT created_at, COUNT(*) AS row_count
FROM users
GROUP BY created_at;

-- 조인[join]
CREATE TABLE orders (
    order_id    INTEGER PRIMARY KEY,
    user_id     INTEGER,
    total_price INTEGER
);

INSERT INTO orders (order_id, user_id, total_price)
VALUES (100, 1, 5000);

SELECT u.user_name, o.total_price
FROM users u
JOIN orders o
  ON u.user_id = o.user_id;
-- 결과:
-- kim, 5000

-- 서브쿼리[subquery]
SELECT user_name
FROM users
WHERE user_id IN (
    SELECT user_id
    FROM orders
    WHERE total_price >= 5000
);
-- 결과: kim

-- 공통 테이블 식[CTE]
WITH order_sum AS (
    SELECT user_id, SUM(total_price) AS total_amount
    FROM orders
    GROUP BY user_id
)
SELECT u.user_name, o.total_amount
FROM users u
JOIN order_sum o
  ON u.user_id = o.user_id;
