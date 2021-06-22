
// myStorage = window.localStorage;
// let namee;
// let pw;
//  localStorage.setItem('Username', namee);
// localStorage.setItem('Password', pw);


// console.log(myStorage)

// var username = localStorage.getItem('Username')
// var password = localStorage.getItem("Password")

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const loginBtn = document.getElementById('btnLogin')
    const singUpBtn = document.getElementById('btnSignUp')
    const container = document.querySelector('.container')
    const form = document.getElementById('form')
    const heading = document.getElementById('formHeading')

    console.log(form)
    singUpBtn.addEventListener('click', signUpForm)

    function signUpForm(e) {
        e.preventDefault();

        window.open("/signup/signup.html", "_self")
        
        
        // if (!input[0].value === "Username" && !input[1].value === "Password") {
          
        //     let newUsername = input[0].value;
        //     let newPassword = input[1].value;
        //     localStorage.setItem("Username", newUsername)
        //     localStorage.setItem("Password", newPassword)
        //     localStorage.getItem(newUsername)
        //     localStorage.getItem(newPassword)
        //     console.log(newUsername)
        //     signUpBtn2.removeEventListener('click', signUpForm)
            
        // }
        
    }
  
    console.log(localStorage)
    loginBtn.addEventListener('click', loginForm)
    const loginInputUser = document.getElementById('loginInputUser')
    const loginInputPassword = document.getElementById('loginInputPassword')
    const dashboard = document.getElementById('dashboard')
    console.log(container)
    // console.log(loginInputPassword)
    function loginForm() {
        // if (loginInputUser.value === username && loginInputPassword.value === password) {
        //     container.classList.remove('container')
        //      container.classList.add('hide')
        //      dashboard.style.display = 'block'
        //     dashboard.classList.add('show')
            
        // } else {
        //     alert("wrong input")
        // }
        var username = localStorage.getItem('Username')
        var password = localStorage.getItem("Password")
        if (loginInputUser.value === username && loginInputPassword.value === password) {
            window.open("/dashboard/dashboard.html", "_self")
           
           
                
           
        } else {
            alert("wrong input")
         }
    }
    
    // singUpBtn.removeEventListener('click', signUpForm)
    


});


