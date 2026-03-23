# ============================================================
# P01. Python 기본 패턴
# ============================================================

# 변수[variable]
user_name = "kim"
user_age = 30
is_admin = True
print(user_name, user_age, is_admin)
# 결과: kim 30 True

# 리스트[list]
score_list = [10, 20, 30]
print(score_list[0])
# 결과: 10

# 딕셔너리[dictionary]
user_item = {
    "name": "lee",
    "age": 25,
    "skills": ["python", "sql"],
}
print(user_item["name"])
print(user_item.get("email"))
# 결과:
# lee
# None

# 조건문[condition]
if user_age >= 20:
    print("adult")
else:
    print("minor")
# 결과: adult

# 반복문[loop]
for skill_item in user_item["skills"]:
    print(skill_item)
# 결과:
# python
# sql

# 리스트 컴프리헨션[list comprehension]
even_list = [num for num in score_list if num % 2 == 0]
print(even_list)
# 결과: [10, 20, 30]

# 함수[function]
def get_display_name(user):
    return f'{user["name"]}({user["age"]})'


print(get_display_name(user_item))
# 결과: lee(25)

# 예외 처리[exception handling]
try:
    parsed_value = int("123")
    print(parsed_value)
except ValueError:
    print("parse error")
# 결과: 123

# 파일 / JSON 실무 패턴[file / json pattern]
import json

json_text = '{"name": "park", "age": 28}'
parsed_user = json.loads(json_text)
print(parsed_user["name"])
# 결과: park
