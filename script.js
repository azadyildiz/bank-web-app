var Customer  = function(name,surname,balance,password){
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.balance = balance;
    this.iban = getRandomIBAN();
    this.fullName = `${name} ${surname}`;
    this.activities = [];
}

var ibans = [10000000000,99999999999];
var customers = [];
var customer1 = new Customer("Azad","Yıldız",500,123456);
customer1.iban = "1";
customers.push(customer1);
var customer2 = new Customer("Taha","Doğan",1000,123123);
customer2.iban = "2";
customers.push(customer2);
var customer3 = new Customer("Kaan","Tangöze",1500,654321);
customer3.iban = "3";
customers.push(customer3);
var customer4 = new Customer("Esma","Inan",2000,321321);
customer4.iban = "4";
customers.push(customer4);

//CREATED alertIban CONTENT

var alertIban = document.createElement("span");
alertIban.textContent = "! You cannot use it.";
alertIban.style.color = "red";

//CREATED alertName CONTENT

var alertName = document.createElement("span");
alertName.textContent = "! Not matched.";
alertName.style.color = "red";

//CREATED alertSameAcc CONTENT
var loginedAcc = customer3;

// IBAN INPUT CONTROLLER
var transferFrom = loginedAcc;
var ibanText = document.getElementById("iban");
let transferTo;
var transferToUpper;
var isIbanCorrect = false;
var isHasalertIban = false;
var isHasAlertIbanforFirstTime = false;

// NAME INPUT CONTROLLER

var nameText = document.getElementById("accName");
nameText.setAttribute("readonly","true");
var isHasalertName = false;
var isHasAlertNameforFirstTime = false;
var isTransferToNameCorrect = false;

// INPUT BUTTON CONTROLLER
var inputButton = document.querySelector("#transferNextButton");
var moneyTransferScreen = document.querySelector(".moneyTransfer");



ibanText.addEventListener("keyup",function(){
    ibanController();
});

nameText.addEventListener("keyup",function(){
    nameController();
});

// IF NAME IS CORRECT, WHEN FOCUS OUT, WE CANT CHANGE TEXTNAME
nameText.addEventListener("focusout",function(){
    if(isTransferToNameCorrect){
        nameText.setAttribute("readonly","true");
    }
})

inputButton.addEventListener("click",function(){
    if(isIbanCorrect && isTransferToNameCorrect){
        moneyTransferScreen.innerHTML = `        <span>Money Transfer</span>
        <label>
            <span class="forTry">Amount</span>
            <span class="forIban">TL</span>
            <input style="border-color: black;" maxlength="11" type="text" name="" id="amount">
        </label>
        <label>
            <span>Description (not required)</span>
            <input maxlength="50" type="text" name="" id="desc">
        </label>
        <button id="confirmButton">Confirm</button>`
    }
    else{

    }
})

inputButton.addEventListener("mouseover",function(){
    if(isIbanCorrect && isTransferToNameCorrect){
        //CSS CONFIGURATION FOR BUTTON. CAN USE BUTTON
        inputButton.style.backgroundColor = "rgba(0,255,100,0.5)";
        inputButton.style.backgroundColor = "rgba(0, 100, 0, 0.75)";
        inputButton.style.color = "white";
        inputButton.style.border = "1px solid rgba(0, 100, 0, 0.75)";
        inputButton.style.cursor = "pointer";
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }
    else{
        //CSS CONFIGURATION FOR BUTTON
        inputButton.style.backgroundColor = "lightgrey";
        inputButton.style.cursor = "no-drop";
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    }
})
inputButton.addEventListener("mouseout",function(){
    //CSS CONFIGURATION FOR BUTTON CANT USE BUTTON
    inputButton.style.backgroundColor = "transparent";
    inputButton.style.color = "black";
    inputButton.style.border = "1px solid black";
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
})





function getRandomIBAN(){

    var flag = true;
    var randomNumber;
    randomNumber = 12343678901;

    while(flag){ // SAYININ 11 HANELİ OLDUĞUNU VE DAHA ÖNCEDEN VAROLAN BİR İBAN NUMARASI OLMADIĞINI KONTROL ETMEK İÇİN OLUŞTURULMUŞ WHİLE
        randomNumber = Math.floor(Math.random()*100000000000);
        if((randomNumber>99999999999 || randomNumber<10000000000)){
            flag = true;
        }
        else{
            for(var i = 0 ; i < ibans.length ; i++){
                if(!(randomNumber == ibans[i])){
                    flag = false;
                }
                else{
                    flag = true;
                }
            }
        }
    }
    ibans.push(randomNumber);
    return `${randomNumber}`;
}
function setCensoreString(string){
    var str= string.substring(2,string.length) ;
    return (string.replace(str,"*".repeat(string.length-2)).toUpperCase());
}
function ibanController(){
    
    for(var i = 0 ; i<customers.length ; i++){
        if(ibanText.value == customers[i].iban && ibanText.value != transferFrom.iban ){
            ibanText.style.borderColor = "green";
            isIbanCorrect = true;
            if(isHasAlertIbanforFirstTime){
                ibanText.parentElement.removeChild(alertIban);
            }
            transferTo=customers[i];
            transferToUpper = transferTo.fullName.toUpperCase(); // WHEN WRITE A NAME CHARS GONNA BE UPPERCASE
            isHasalertIban = false;
            nameText.removeAttribute("readonly");
            nameText.setAttribute("placeholder",`${setCensoreString(transferTo.name)} ${setCensoreString(transferTo.surname)}`)
            break;
        }
        else{
            nameText.setAttribute("placeholder",``);
            ibanText.style.borderColor = "red";
            isIbanCorrect = false;
            transferTo = undefined;
            transferToUpper = undefined;
            nameText.setAttribute("readonly","true");
            if(!isHasalertIban){
                ibanText.parentElement.appendChild(alertIban);
                isHasAlertIbanforFirstTime = true;
            }
        }
    }

    if(ibanText.parentElement.contains(alertIban)){
        isHasalertIban = true;
    }
}
function nameController(){
    
    if(isIbanCorrect){
        ibanText.setAttribute("readonly","true"); // WHEN WRITE A NAME WE CANT CHANGE IBAN
        nameText.value = nameText.value.toUpperCase();
    for(var i = 0 ; i<customers.length ; i++){
        if(nameText.value == transferToUpper){
            nameText.style.borderColor = "green";
            isTransferToNameCorrect = true;
            if(isHasAlertNameforFirstTime){
                nameText.parentElement.removeChild(alertName);
            }
            isHasalertName = false;
            break;
        }
        else{
            nameText.style.borderColor = "red";
            isTransferToNameCorrect = false;
            if(!isHasalertName){
                nameText.parentElement.appendChild(alertName);
                isHasAlertNameforFirstTime = true;
            }
        }
    }

    if(nameText.parentElement.contains(alertName)){
        isHasalertName = true;
    }   
    }
}
