    //DASHBOARD

    const backToLoginBtn = document.getElementById('backToLoginBtn')
    console.log(backToLoginBtn)
    backToLoginBtn.addEventListener('click', backToLogin)
    function backToLogin() {
        window.open("/index/index.html", "_self")
    }


/*TO DO LIST */
function getInputValue() {
    return document.getElementById('add-item-text').value;
}
  
    const addBtn = document.getElementById("add-button");
console.log(addBtn)


function createNewListItem(text) {
   
        var newLi = document.createElement('li')
        newLi.className = 'LIclass'
        
        let newListItemSpan = document.createElement('span')
        newListItemSpan.className = 'SpanClass'
        newListItemSpan.textContent = text;

        let newListItemLink = document.createElement('a');
        newListItemLink.href = "#";
        newListItemLink.className = "list-group-item-button";
        
        newListItemLink.title = "remove item"; 
        newListItemLink.textContent = "x";
   

        newLi.appendChild(newListItemSpan)
        newLi.appendChild(newListItemLink)
        addDeleteFunctionality(newLi)
        return newLi;
    }
 
    document.getElementById('add-button').addEventListener('click', function () {
        var inputValueText = getInputValue();
        if (inputValueText === "") {
            alert("unesite namirnicu u polje :)");
        } else {
            var newListItem = createNewListItem(inputValueText);
        var list = document.getElementById('list-items')
        list.appendChild(newListItem);
        }
        
        
    });
   
   
    function addDeleteFunctionality(listItem) {
        listItem.lastElementChild.addEventListener('click', function () {
            var list = document.getElementById("list-items");
            list.removeChild(listItem);
        })
    }




const settingsBtn = document.getElementById('userBtn')
settingsBtn.addEventListener('click', openUserSettings)
// settingsBtn.addEventListener('click', closeUserSettings)
const body = document.querySelector('body')
console.log(body)
const personalInfo = document.createElement('div')
personalInfo.className ='hide'
function openUserSettings() {
    if (personalInfo.classList.contains('hide')) {
        personalInfo.classList.add('userSettings')
        personalInfo.classList.remove('hide')
        xBtn.style.display =' block'
    }
    else {
        personalInfo.classList.remove('userSettings')
        personalInfo.classList.add('hide')
        xBtn.style.display =' none'
    }
   
    
    
  
}
    
function userSettingsContent() {
    let email = localStorage.getItem("Email")
    let username = localStorage.getItem('Username')
    let password = localStorage.getItem('Password')
   

    const heading = document.createElement('h1')
    heading.className= 'heading'
    heading.innerText = "Username :"
    const paragraph = document.createElement('p')
    paragraph.className= 'paragraph'
    paragraph.innerText = username;
    paragraph.contentEditable = "true";

    const heading2 = document.createElement('h1')
    heading2.className= 'heading'
    heading2.innerText = "Email :"
    const paragraph2 = document.createElement('p')
    paragraph2.className= 'paragraph'
    paragraph2.innerText = email;
    paragraph2.contentEditable = "true";
    
    const heading3 = document.createElement('h1')
    heading3.className= 'heading'
    heading3.innerText = "Password :"
    const paragraph3 = document.createElement('p')
    paragraph3.className= 'paragraph'
    paragraph3.innerHTML = "<input type=password id=myInput>"+
        "<input type=checkbox onclick=myFunction()>Show Password";
    paragraph3.contentEditable = "true";
    
    const xBtn = document.createElement('button')
    xBtn.innerText = "X"
    xBtn.id = "xBtn"
    xBtn.addEventListener('click', returnToDashboard)

    function returnToDashboard() {
        // window.open("/dashboard/dashboard.html", "_self")
        personalInfo.className ='hide'
    }
    
    paragraph.addEventListener('input', changeUsernameValue)
    paragraph2.addEventListener('input', changeMailValue)
    paragraph3.addEventListener('input', changePasswordValue)
    

 
    function changeUsernameValue() {
        NewUsername = paragraph.innerText;
        username = localStorage.setItem("Username", NewUsername)
        console.log(localStorage)
    }
    function changeMailValue() {
        NewMail = paragraph2.innerText;
        email = localStorage.setItem("Email", NewMail)
        console.log(localStorage)
    }
    function changePasswordValue() {
        NewPassword = inputPw.value;
        password = localStorage.setItem("Password", NewPassword)
        console.log(localStorage)
    }

    body.appendChild(personalInfo)
    personalInfo.appendChild(heading)
    personalInfo.appendChild(paragraph)
    personalInfo.appendChild(heading2)
    personalInfo.appendChild(paragraph2)
    personalInfo.appendChild(heading3)
    personalInfo.appendChild(paragraph3)
    personalInfo.appendChild(xBtn)
    const inputPw = document.getElementById('myInput')
    inputPw.value = password;
}
userSettingsContent()

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
  

