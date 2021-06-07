function ibanController(){
    for(var i = 0 ; i<customers.length ; i++){
        if(ibanTextInput.value == customers[i].iban && ibanTextInput.value != transferFrom.iban ){
            ibanTextInput.style.borderColor = "green";
            isIbanCorrect = true;
            if(isHasAlertIbanforFirstTime){
                ibanTextInput.parentElement.removeChild(alertIban);
            }
            transferTo=customers[i];
            transferToUpper = transferTo.fullName.toUpperCase(); // WHEN WRITE A NAME CHARS GONNA BE UPPERCASE
            isHasalertIban = false;
            nameTextInput.removeAttribute("readonly");
            nameTextInput.setAttribute("placeholder",`${setCensoreString(transferTo.name)} ${setCensoreString(transferTo.surname)}`)
            break;
        }
        else{
            nameTextInput.setAttribute("placeholder",``);
            ibanTextInput.style.borderColor = "red";
            nameTextInput.setAttribute("readonly","true");
            isIbanCorrect = false;
            transferTo = undefined;
            transferToUpper = undefined;
            //nameTextInput.setAttribute("readonly","true");
            if(!isHasalertIban){
                ibanTextInput.parentElement.appendChild(alertIban);
                isHasAlertIbanforFirstTime = true;
            }
            if(nameTextInput.value.length > 0){
                nameTextInput.removeAttribute("placeholder");
                nameTextInput.value = "";
                nameTextInput.style.borderColor = "black";
                if(isHasalertName){
                    nameTextInput.parentElement.removeChild(alertName);
                }
                isHasalertName = false;
            }
        }
    }
    if(ibanTextInput.parentElement.contains(alertIban)){
        isHasalertIban = true;
    }
}
function nameController(){
    
    if(isIbanCorrect){
        nameTextInput.value = nameTextInput.value.toUpperCase();
        for(var i = 0 ; i<customers.length ; i++){
            if(nameTextInput.value == transferToUpper){
                nameTextInput.style.borderColor = "green";
                isTransferToNameCorrect = true;
                if(isHasAlertNameforFirstTime && isHasalertName){
                    nameTextInput.parentElement.removeChild(alertName);
                }
                isHasalertName = false;
                break;
            }
            else{
                nameTextInput.style.borderColor = "red";
                isTransferToNameCorrect = false;
                if(!isHasalertName){
                    nameTextInput.parentElement.appendChild(alertName);
                    isHasAlertNameforFirstTime = true;
                }
            }
        }
        if(nameTextInput.parentElement.contains(alertName)){
            isHasalertName = true;
        }   
    }
}
function nextButtonController(){
    if(isIbanCorrect && isTransferToNameCorrect){
        step1.style.display = "none";
        step2.style.display = "block";
    }
}
function nextbuttonCssController(button){
    if((isIbanCorrect && isTransferToNameCorrect)){
        button.style.backgroundColor = "rgba(0,255,100,0.5)";
        button.style.backgroundColor = "rgba(0, 100, 0, 0.75)";
        button.style.color = "white";
        button.style.border = "1px solid rgba(0, 100, 0, 0.75)";
        button.style.cursor = "pointer";
    }
    else{
        button.style.backgroundColor = "lightgrey";
        button.style.cursor = "no-drop";
    }
}
function nextbuttonGetBackCss(button){
    button.style.backgroundColor = "transparent";
    button.style.color = "black";
    button.style.border = "1px solid black";
}

function amountController(){
    if(amountInput.value <= transferFrom.balance && amountInput.value > 0){
        amountInput.style.borderColor = "green";
        isAmountCorrect = true;
    }
    else{
        amountInput.style.borderColor = "red";
        isAmountCorrect = false;
    }
}
function confirmButtonController(){
    if(isAmountCorrect){
        desc = descInput.value;
        amount = amountInput.value;
        transferPopup.style.display = "block";
        transferPopupDesc.innerHTML = `You're sending ${amount} TL to ${transferTo.fullName} (TR ${transferTo.iban}). <br> Your description: "${desc}"<br><br> Are you sure? `
    }
}
function confirmbuttonCssController(button){
    if((isAmountCorrect)){
        button.style.backgroundColor = "rgba(0,255,100,0.5)";
        button.style.backgroundColor = "rgba(0, 100, 0, 0.75)";
        button.style.color = "white";
        button.style.border = "1px solid rgba(0, 100, 0, 0.75)";
        button.style.cursor = "pointer";
    }
    else{
        button.style.backgroundColor = "lightgrey";
        button.style.cursor = "no-drop";
    }
}
function confirmbuttonGetBackCss(button){
    button.style.backgroundColor = "transparent";
    button.style.color = "black";
    button.style.border = "1px solid black";
}

function prevButtonController(){
    step2.style.display = "none"
    step1.style.display = "block"
}
function popupNoButtonController(){
    transferPopup.style.display = "none"
}
var dateNow = new Date();
function popupYesButtonController(){
    transferFrom.balance -= amount
    transferTo.balance += amount
    transferFrom.activities.push(`<b>${dateNow.toLocaleDateString()} - </b>${dateNow.toLocaleTimeString()}<br><br>You transferred ${amount} TL to ${transferTo.fullName} (TR ${transferTo.iban}). <br><b>Description:</b> ${desc}`)
    transferTo.activities.push(`<b>${dateNow.toLocaleDateString()} - </b>${dateNow.toLocaleTimeString()}<br><br>${transferFrom.fullName} (TR ${transferFrom.iban}) transferred ${amount} TL to you. <b>Description:</b> ${desc}`)
    refreshLocalStorage()
    transferPopup.style.display = "none"
    window.location.href = "index.html"
}

function refreshLocalStorage(){
    localStorage.clear();
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

function accActController(){
    actContainer.style.display = "block"
    setTimeout(function(){
        actContainer.style.left = "50%"
        actContainer.style.opacity = "1"
        
    },10)
    infoContainer.style.left = "0%"
    infoContainer.style.opacity = "0"
    setTimeout(function(){
        infoContainer.style.display = "none"
    },500)
}
function goBackButtonController(){
    infoContainer.style.display = "block"
    setTimeout(function(){
        infoContainer.style.left = "50%"
        infoContainer.style.opacity = "1"
    },10)
    actContainer.style.left = "125%"
    actContainer.style.opacity = "0"
    setTimeout(function(){
        actContainer.style.display = "none"
    },500)
}