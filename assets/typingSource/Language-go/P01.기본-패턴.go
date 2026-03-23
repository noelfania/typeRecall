package main

import (
	"fmt"
	"strings"
)

// ============================================================
// P01. Go 기본 패턴
// ============================================================

type User struct {
	Name  string
	Age   int
	Admin bool
}

func add(numA int, numB int) int {
	return numA + numB
}

func divide(numA int, numB int) (int, error) {
	if numB == 0 {
		return 0, fmt.Errorf("0으로 나눌 수 없음")
	}
	return numA / numB, nil
}

func main() {
	// 변수 선언[variable declaration]
	var userName string = "kim"
	userAge := 30
	const serviceName = "gmtl"
	fmt.Println(userName, userAge, serviceName)
	// 결과: kim 30 gmtl

	// 조건문[condition]
	if userAge >= 20 {
		fmt.Println("adult")
	} else {
		fmt.Println("minor")
	}
	// 결과: adult

	// 반복문[loop]
	scoreList := []int{10, 20, 30}
	for index, score := range scoreList {
		fmt.Println(index, score)
	}
	// 결과:
	// 0 10
	// 1 20
	// 2 30

	// 맵[map]
	userMap := map[string]string{
		"name": "lee",
		"role": "admin",
	}
	fmt.Println(userMap["name"])
	// 결과: lee

	// 구조체[struct]
	userItem := User{Name: "park", Age: 25, Admin: true}
	fmt.Println(userItem.Name, userItem.Admin)
	// 결과: park true

	// 함수[function]
	sumValue := add(3, 4)
	fmt.Println(sumValue)
	// 결과: 7

	// 다중 반환값[multiple return values] + 에러 처리[error handling]
	quotientValue, err := divide(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(quotientValue)
	// 결과: 5

	// 문자열 처리[string handling]
	tagText := "go,api,server"
	tagList := strings.Split(tagText, ",")
	fmt.Println(tagList)
	// 결과: [go api server]

	// 포인터[pointer]
	countValue := 1
	countPtr := &countValue
	*countPtr = 2
	fmt.Println(countValue)
	// 결과: 2
}
