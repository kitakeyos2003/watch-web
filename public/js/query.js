
function login() {
    var username = $("#username").val()
    var password = $("#password").val()
    if (username == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng nhập tài khoản!'
        })
    } else if (password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng nhập mật khẩu!'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tính năng đang được phát triển!'
        })
    }
}