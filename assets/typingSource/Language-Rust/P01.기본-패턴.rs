// ============================================================
// P01. Rust 기본 패턴
// ============================================================

#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}

fn add(num_a: i32, num_b: i32) -> i32 {
    num_a + num_b
}

fn main() {
    // 변수와 가변성[mutability]
    let user_name = "kim";
    let mut count_value = 1;
    count_value += 1;
    println!("{} {}", user_name, count_value);
    // 결과: kim 2

    // 기본 타입[primitive type]
    let score_value: i32 = 95;
    let ratio_value: f64 = 3.14;
    let is_admin: bool = true;
    println!("{} {} {}", score_value, ratio_value, is_admin);
    // 결과: 95 3.14 true

    // 조건문[condition]
    if score_value >= 90 {
        println!("A");
    } else {
        println!("B");
    }
    // 결과: A

    // 반복문[loop]
    let color_list = ["red", "green", "blue"];
    for color_item in color_list {
        println!("{}", color_item);
    }
    // 결과: red / green / blue

    // 벡터[vector]
    let mut number_list = vec![1, 2, 3];
    number_list.push(4);
    println!("{:?}", number_list);
    // 결과: [1, 2, 3, 4]

    // 구조체[struct]
    let user_item = User {
        name: String::from("lee"),
        age: 28,
    };
    println!("{:?}", user_item);
    println!("{} {}", user_item.name, user_item.age);
    // 결과: lee 28

    // 옵션[option]
    let maybe_value = Some(10);
    match maybe_value {
        Some(value) => println!("{}", value),
        None => println!("none"),
    }
    // 결과: 10

    // 함수[function]
    let sum_value = add(3, 4);
    println!("{}", sum_value);
    // 결과: 7
}
