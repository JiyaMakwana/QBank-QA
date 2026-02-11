// Write a regex that checks whether a string contains only digits (0–9).
function check(str) {
    let regex=/^\d+$/;
    console.log(regex.test(str));
}

check("12345");
check("12a45");   // false
check(" 123 ");   // false
check("");        // false