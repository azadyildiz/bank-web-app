ibanTextInput.addEventListener("keyup",function(){
    ibanController()
})

nameTextInput.addEventListener("keyup",function(){
    nameController()
})


nextButton.addEventListener("click",function(){
    nextButtonController()
})
nextButton.addEventListener("mouseover",function(event){
    nextbuttonCssController(event.target)
})
nextButton.addEventListener("mouseout",function(event){
    nextbuttonGetBackCss(event.target)
})


amountInput.addEventListener("keyup",function(){
    amountController()
})


confirmButton.addEventListener("click",function(){
    confirmButtonController()
})
confirmButton.addEventListener("mouseover",function(event){
    confirmbuttonCssController(event.target)
})
confirmButton.addEventListener("mouseout",function(event){
    confirmbuttonGetBackCss(event.target)
})


prevButton.addEventListener("click",function(){
    prevButtonController()
})


popupNoButton.addEventListener("click",function(){
    popupNoButtonController()
})
popupYesButton.addEventListener("click",function(){
    popupYesButtonController()
})


accAct.addEventListener("click",function(){
    accActController()
})
goBackButton.addEventListener("click",function(){
    goBackButtonController()
})