function login() {

    var id = document.getElementById("id");
    var password = document.getElementById("password");

    console.log(id.value);
    console.log(password.value);
    // เผื่ออยากเปิดใช้
    if (id.value != ("") && password.value != ("")) {
        if (id.value == password.value) {



            console.log("true");

        } else {
            console.log("false");
        }
    } else {
        console.log("input id or password");
    }

}