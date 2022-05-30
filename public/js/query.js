
function login() {
    var username = $("#username").val()
    var password = $("#password").val()
    if (username === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng nhập tài khoản!'
        })
        return
    }
    if (password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng nhập mật khẩu!'
        })
        return
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vui lòng nhập mật khẩu!'
    })
}