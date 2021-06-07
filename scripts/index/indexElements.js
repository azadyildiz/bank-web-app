// EDITING PAGE
var pageBalance = document.querySelector(".balance");
var pageAccIban = document.querySelector(".accNum");

//CREATED alertIban CONTENT
var alertIban = document.createElement("span");
alertIban.textContent = "! You cannot use it.";
alertIban.style.color = "red";

//CREATED alertName CONTENT
var alertName = document.createElement("span");
alertName.textContent = "! Not matched.";
alertName.style.color = "red";

// STEP 1 CONTROLLER
var step1 = document.getElementById("step1");

// IBAN TEXT INPUT CONTROLLER
var transferFrom = loginedAcc;
var ibanTextInput = document.getElementById("iban");
let transferTo;
var transferToUpper;
var isIbanCorrect = false;
var isHasalertIban = false;
var isHasAlertIbanforFirstTime = false;

// NAME TEXT INPUT CONTROLLER
var nameTextInput = document.getElementById("accName");
nameTextInput.setAttribute("readonly","true");
var isHasalertName = false;
var isHasAlertNameforFirstTime = false;
var isTransferToNameCorrect = false;

// NEXT BUTTON CONTROLLER
var nextButton = document.querySelector("#nextButton");
var moneyTransferContainer = document.querySelector(".moneyTransfer");
var isAmountCorrect = false;

// STEP 2 CONTROLLER
var step2 = document.getElementById("step2");
step2.style.display = "none"

// AMOUNT INPUT CONTROLLER
var amountInput = document.getElementById("amount");
var isAmountCorrect = false;
var amount;

// DESCRIPTION INPUT CONTROLLER
var descInput = document.getElementById("desc");
var desc;

// CONFIRM BUTTON CONTROLLER
var confirmButton = document.getElementById("confirmButton");

// PREV BUTTON CONTROLLER
var prevButton = document.getElementById("prevButton")

// POPUP CONTROLLER
var transferPopup = document.getElementById("transferPopup")
var transferPopupDesc = document.getElementById("transferPopupDesc")
var popupYesButton = document.getElementById("popupYesButton")
var popupNoButton = document.getElementById("popupNoButton")

// ACCOUNT ACTIVITIES CONTROLLER
var actContainer = document.querySelector(".actContainer");
var actSpan = document.getElementById("actSpan")
var accAct = document.querySelector(".accAct")
var infoContainer = document.querySelector(".infoContainer")
var goBackButton = document.getElementById("goBackButton")