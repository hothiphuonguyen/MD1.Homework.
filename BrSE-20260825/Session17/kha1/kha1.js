function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (
                username === "huanrose@gmail.com" &&
                password === "123456"
            ) {
                alert("Đăng nhập thành công!");
            } else {
                alert("Đăng nhập thất bại!");}}
                
