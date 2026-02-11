// exact 10 digit mobile number
function check(num) {
    let regex=/^\d{10}$/;
    console.log(regex.test(num));
}

check(9104757414);
check(91045)
check(98-8934)