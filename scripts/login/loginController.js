if(localStorage.length > 0 ){
    window.location.href = "index.html"
}

function checkIbanandPassword(iban,password){
    var isCorrect = false;
    customers.forEach(element => {
        if(element.iban == iban){
            if(element.password == password){
                console.log("Success login!");
                loginedAcc = element;
                isCorrect = true;
                addingLocalStorage(loginedAcc);
                successfulLoginAnimation(loginSpan,loginAnim);
                setTimeout(() => {
                    // WE LOGINED THE ACCOUNT SO LOAD THE INDEX PAGE 
                    window.location.href = "index.html";
                }, 1500);
            }
            else{
                isCorrect = true;
                failedLoginAnimation(loginSpan,loginAnim);
            }
        }
    });
    if(!isCorrect){
        failedLoginAnimation(loginSpan,loginAnim);
    }
}
function successfulLoginAnimation(span,anim){
    anim.style.backgroundColor = "green";
    anim.style.width = "18.82rem";

    span.style.color = "green";
    span.style.opacity = "1";
    span.textContent = "Login successful!"

    setTimeout(() => {
        defaultLoginAnimation(span,anim);
    }, 2000);
}
function failedLoginAnimation(span,anim){
    anim.style.backgroundColor = "red";
    anim.style.width = "18.82rem";

    span.style.color = "red";
    span.style.opacity = "1";
    span.textContent = "Login failed!"

    setTimeout(() => {
        defaultLoginAnimation(span,anim);
        
    }, 2000);
}
function defaultLoginAnimation(span,anim){
    anim.style.backgroundColor = "transparent";
    anim.style.width = "0rem";

    span.style.color = "black";
    span.style.opacity = "0";
}
function addingLocalStorage(loginedAcc){
    var loginedAccArray = []
    loginedAccArray.push(loginedAcc.name)
    loginedAccArray.push(loginedAcc.surname)
    loginedAccArray.push(loginedAcc.balance)
    loginedAccArray.push(loginedAcc.password)
    loginedAccArray.push(loginedAcc.iban)
    loginedAccArray.push(loginedAcc.fullName)
    loginedAccArray.push(loginedAcc.activities)
    localStorage.setItem("loginedAcc",JSON.stringify(loginedAccArray))
}