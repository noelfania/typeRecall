## 백엔드

```
src
 ├ user
 │   ├ controller
 │   │   └ UserController.java
 │   │
 │   ├ service
 │   │   └ UserService.java
 │   │
 │   ├ repository
 │   │   └ UserRepository.java
 │   │
 │   ├ dto
 │   │   ├ UserCreateRequest.java
 │   │   └ UserResponse.java
 │   │
 │   └ entity
 │       └ User.java
 │
 ├ order
 │   ├ controller
 │   ├ service
 │   ├ repository
 │   └ dto
 │
 └ payment
```




## 프론트엔드

```
src
 ├ user
 │   ├ api
 │   │   └ userApi.ts
 │   │
 │   ├ hooks
 │   │   └ useUser.ts
 │   │
 │   ├ components
 │   │   ├ UserList.tsx
 │   │   └ UserProfileCard.tsx
 │   │
 │   └ types
 │       └ user.ts
 │
 ├ order
 │   ├ api
 │   ├ hooks
 │   └ components
 │
 └ payment
 ```