$(document).ready(function($){
    const loginBtn = $('#login');
    const resetBtn = $('#reset');
    const accountEle = $('#name_input');
    const passEle = $('#pass_input');
    const repassEle = $('#repass_input');

    // 校验输入
    function checkInput() {
        const account = accountEle && accountEle[0] && accountEle[0].value || '';
        const password = passEle && passEle[0] && passEle[0].value || '';
        const repassword = repassEle && repassEle[0] && repassEle[0].value || '';
        return account && password.length >= 8 && repassword == password;
    }
    loginBtn.click(function() {
        console.log('loginBtn click')
        if (checkInput()) {
            // todo ajax
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3001/account/api/register',
                data: {
                    account: accountEle && accountEle[0] && accountEle[0].value || "",
                    password: passEle && passEle[0] && passEle[0].value || ""
                },
                contentType: "application/json",
                success: function({code, msg}) {
                    if (code == 0) {
                        alert('注册成功');
                        location.replace('http://localhost:3001/account/page/login');
                    } else {
                        alert('注册失败')
                    }
                },
                fail:function() {
                    alert("注册失败")
                },
            })
            console.log('login success')
        } else {
            alert('请检查帐密')
        }
    })
    resetBtn.click(function () { 
        accountEle.value("");
        passEle.value("");
     })
});


