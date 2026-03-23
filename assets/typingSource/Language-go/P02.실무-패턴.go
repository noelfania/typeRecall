package main

import (
	"encoding/json"
	"fmt"
)

// ============================================================
// P02. Go 실무 패턴
// ============================================================

type Product struct {
	Name  string `json:"name"`
	Price int    `json:"price"`
}

func makeDoubles(input []int) []int {
	result := make([]int, 0, len(input))
	for _, item := range input {
		result = append(result, item*2)
	}
	return result
}

func main() {
	// 슬라이스 추가[append]
	valueList := []int{1, 2}
	valueList = append(valueList, 3, 4)
	fmt.Println(valueList)
	// 결과: [1 2 3 4]

	// 맵 존재 확인[comma ok]
	roleMap := map[string]string{"kim": "admin"}
	roleValue, ok := roleMap["kim"]
	fmt.Println(roleValue, ok)
	// 결과: admin true

	// 구조체 + JSON
	productItem := Product{Name: "keyboard", Price: 50000}
	jsonBytes, _ := json.Marshal(productItem)
	fmt.Println(string(jsonBytes))
	// 결과: {"name":"keyboard","price":50000}

	// 인터페이스 대신 에러 우선 처리[error first]
	_, err := json.Marshal(make(chan int))
	if err != nil {
		fmt.Println("marshal error")
	}
	// 결과: marshal error

	// 슬라이스 변환 패턴[transform pattern]
	doubleList := makeDoubles([]int{1, 2, 3})
	fmt.Println(doubleList)
	// 결과: [2 4 6]
}
