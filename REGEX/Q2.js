// LC letters only
function check(str){
    let regex=/^[a-z]+$/;
    console.log(regex.test(str));
}
check("Hello")
check("abc123")
check("hello_world")

check("hello")
check("abc")
check("helloworld")
