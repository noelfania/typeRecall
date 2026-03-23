# ============================================================
# P02. Python 실무 패턴
# ============================================================

user_list = [
    {"name": "kim", "age": 30},
    {"name": "lee", "age": 20},
    {"name": "park", "age": 25},
]

# 필터링[filtering]
adult_list = [user for user in user_list if user["age"] >= 25]
print(adult_list)
# 결과: [{'name': 'kim', 'age': 30}, {'name': 'park', 'age': 25}]

# 변환[mapping]
name_list = [user["name"] for user in user_list]
print(name_list)
# 결과: ['kim', 'lee', 'park']

# 정렬[sorting]
sorted_list = sorted(user_list, key=lambda user: user["age"], reverse=True)
print(sorted_list[0]["name"])
# 결과: kim

# 기본값 처리[default handling]
config = {"timeout": 3}
retry_count = config.get("retry", 0)
print(retry_count)
# 결과: 0

# 함수 조합[function composition]
def format_user(user):
    return f'{user["name"]}:{user["age"]}'


formatted_list = list(map(format_user, user_list))
print(formatted_list)
# 결과: ['kim:30', 'lee:20', 'park:25']
