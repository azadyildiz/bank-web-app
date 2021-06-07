// IF THERE IS NO LOGINED ACC, LOGIN PAGE GONNA LOAD
if(localStorage.length < 1 ){
    window.location.href = "login.html";
}

// GETTING LOGINED ACC VARIABLES ON LOCAL STORAGE
var loginedAccLS ;
loginedAccLS = JSON.parse(localStorage.getItem("loginedAcc"));
loginedAcc.name =       loginedAccLS[0]
loginedAcc.surname =    loginedAccLS[1]
loginedAcc.balance =    loginedAccLS[2]
loginedAcc.password  =  loginedAccLS[3]
loginedAcc.iban =       loginedAccLS[4]
loginedAcc.fullName =   loginedAccLS[5]
loginedAcc.activities = loginedAccLS[6]

// CHANGING INDEX PAGE CONTENT
pageAccIban.innerHTML = `${loginedAccLS[5]} <br> <br> TR ${loginedAccLS[4]}`;
pageBalance.textContent = `${loginedAccLS[2]} TL`;

// ADDING ACCOUNT ACTIVITIES
for(var i = 0 ; i<loginedAcc.activities.length ; i++){
    createActElement(loginedAcc.activities[i]);
}
function createActElement(content){
    var div = document.createElement("div");
    div.className = "act";
    var span = document.createElement("span");
    span.className = "actSpanClass";
    span.innerHTML = content;
    div.appendChild(span);
    actContainer.appendChild(div);
}