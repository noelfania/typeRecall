import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class P02PracticalPatterns {
    public static void main(String[] args) {
        // 리스트[list]
        List<String> nameList = new ArrayList<>();
        nameList.add("kim");
        nameList.add("lee");
        System.out.println(nameList);
        // 결과: [kim, lee]

        // 맵[map]
        Map<String, Integer> ageMap = new HashMap<>();
        ageMap.put("kim", 30);
        ageMap.put("lee", 25);
        System.out.println(ageMap.get("kim"));
        // 결과: 30

        // 람다[lambda]
        nameList.forEach(item -> System.out.println(item.toUpperCase()));
        // 결과:
        // KIM
        // LEE

        // 예외 처리[exception handling]
        try {
            int parsedValue = Integer.parseInt("123");
            System.out.println(parsedValue);
        } catch (NumberFormatException err) {
            System.out.println("parse error");
        }
        // 결과: 123

        // 메서드 분리[method extraction]
        System.out.println(formatUser("park", 28));
        // 결과: park(28)
    }

    static String formatUser(String nameValue, int ageValue) {
        return nameValue + "(" + ageValue + ")";
    }
}
