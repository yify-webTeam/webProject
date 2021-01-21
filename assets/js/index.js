$(document).ready(function($){
    
    const loginBtn = $('#login');
    const resetBtn = $('#reset');
    const accountEle = $('#name_input');
    const passEle = $('#pass_input');

    // 校验输入
    function checkInput() {
        return accountEle && accountEle[0] && accountEle[0].value && passEle && passEle[0] && passEle[0].value.length >= 8;
    }
   
    loginBtn.click(function() {
        console.log('loginBtn click')
        if (checkInput()) {
            // todo ajax
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3001/account/api/login',
                data: {
                    account: accountEle && accountEle[0] && accountEle[0].value || "",
                    password: passEle && passEle[0] && passEle[0].value || ""
                },
                contentType: "application/json",
                success: function({code, msg}) {
                    if (code == 0) {
                        alert('登陆成功');
                    } else if (code == -1) {
                        location.replace('http://localhost:3001/account/page/register')
                    } else {
                        alert('登陆失败')
                    }
                },
                fail:function() {
                    alert("登陆失败")
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

