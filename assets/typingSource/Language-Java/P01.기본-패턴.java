class P01BasicPatterns {

    enum UserRole {
        USER, ADMIN
    }

    static int add(int numA, int numB) {
        return numA + numB;
    }

    public static void main(String[] args) {
        // 기본 타입[primitive type]
        int userAge = 30;
        double scoreValue = 95.5;
        boolean isAdmin = true;
        char gradeValue = 'A';
        System.out.println(userAge);
        System.out.println(scoreValue);
        System.out.println(isAdmin);
        System.out.println(gradeValue);
        // 결과: 30 / 95.5 / true / A

        // 문자열[string]
        String userName = "kim";
        System.out.println(userName.toUpperCase());
        // 결과: KIM

        // 조건문[condition]
        if (userAge >= 20) {
            System.out.println("adult");
        } else {
            System.out.println("minor");
        }
        // 결과: adult

        // 배열[array]
        String[] colorList = { "red", "green", "blue" };
        for (String colorItem : colorList) {
            System.out.println(colorItem);
        }
        // 결과:
        // red
        // green
        // blue

        // 다차원 배열[multidimensional array]
        int[][] matrixValue = { { 1, 2 }, { 3, 4 } };
        System.out.println(matrixValue[1][0]);
        // 결과: 3

        // 열거형[enum]
        UserRole roleValue = UserRole.ADMIN;
        switch (roleValue) {
            case USER:
                System.out.println("user");
                break;
            case ADMIN:
                System.out.println("admin");
                break;
        }
        // 결과: admin

        // 형변환[type casting]
        double ratioValue = 9.8;
        int intValue = (int) ratioValue;
        System.out.println(intValue);
        // 결과: 9

        // 정적 메서드[static method]
        int sumValue = add(5, 7);
        System.out.println(sumValue);
        // 결과: 12
    }
}
