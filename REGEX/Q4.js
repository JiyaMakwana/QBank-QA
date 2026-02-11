function checkUsername(str) {
    let regex=/^[a-zA-Z0-9]{5,12}$/;
    console.log(regex.test(str));
}

checkUsername("dev123");
checkUsername("hello@123");
checkUsername("user name");