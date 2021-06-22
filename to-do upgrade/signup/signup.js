const backToLogin = document.getElementById('backToLoginBtn')

backToLogin.addEventListener('click', backToDashboard)

function backToDashboard() {
    window.open('/index/index.html', "_self")
}

const signupInputUser = document.getElementById('signupInputUser')
const signupInputPassword = document.getElementById('signupInputPassword')
const signupInputMail = document.getElementById('signupInputMail')
const btnSignUp = document.getElementById('btnSignUp')
console.log(btnSignUp)
btnSignUp.addEventListener('click', signUpFunction)

myStorage = window.localStorage;




function signUpFunction() {
    signUpChecker();
    storager()
    window.open("/index/index.html", "_self")
}

function signUpChecker() {
    if (!(signupInputUser.value == "" || signupInputPassword.value == "" || signupInputMail.value == "")) {
        
    } else {
        alert('Please enter your credentials')
    }
}

function storager() {
    myStorage = window.localStorage;
    const uname = signupInputUser.value;
    const pword = signupInputPassword.value;
    const mail = signupInputMail.value;
     localStorage.setItem('Username', uname);
    localStorage.setItem('Password', pword);
    localStorage.setItem('Email', mail);
    
    var username = localStorage.getItem('Username')
    var password = localStorage.getItem("Password")
    var email = localStorage.getItem("Email")
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(myStorage)
    
}