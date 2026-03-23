use std::collections::HashMap;

// ============================================================
// P02. Rust 실무 패턴
// ============================================================

fn main() {
    // 문자열[string]
    let text_value = String::from("hello rust");
    println!("{}", text_value.to_uppercase());
    // 결과: HELLO RUST

    // 해시맵[hash map]
    let mut age_map = HashMap::new();
    age_map.insert("kim", 30);
    age_map.insert("lee", 25);
    println!("{:?}", age_map.get("kim"));
    // 결과: Some(30)

    // 패턴 매칭[pattern matching]
    let maybe_score = Some(100);
    if let Some(score) = maybe_score {
        println!("{}", score);
    }
    // 결과: 100

    // 결과 타입[result]
    let parsed_value = "42".parse::<i32>();
    match parsed_value {
        Ok(value) => println!("{}", value),
        Err(_) => println!("parse error"),
    }
    // 결과: 42

    // 반복자[iterator]
    let nums = vec![1, 2, 3];
    let doubled: Vec<i32> = nums.iter().map(|item| item * 2).collect();
    println!("{:?}", doubled);
    // 결과: [2, 4, 6]
}
