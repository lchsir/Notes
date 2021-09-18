// 定义一个登录和登出的函数
/* function login() {
    const username = 'admin' // 假装用户信息是从localStorage里面获取的
    console.log(username + '登录了')
}

function logout() {
    const username = 'admin' // 假装用户信息是从localStorage里面获取的
    console.log(username + '登出了')
}
login()
logout() */

// 优化：写一个中间函数,中间函数的功能就是读取username,这个函数还需要负责把username传递给两个函数
function propUsername(call) {
    function getUsername() {
        const username = 'admin'
        call(username)
    }
    return getUsername
}

function login(username) {
    console.log(username + '登录了')
}

function logout(username) {
    console.log(username + '登出了')
}

const newLogin = propUsername(login)
const newLogout = propUsername(logout)
newLogin()
newLogout()
// propUsername就是一个高阶函数,它帮我们处理了username,获取username之后传递给了目标函数
// 我们最终嗲用的是newLogin、newLogout根本不用去关心username是怎么来的。