var Customer  = function(name,surname,balance,password){
    this.name = name;
    this.surname = surname;
    this.balance = balance;
    this.password = password;
    this.iban = getRandomIBAN();
    this.fullName = `${name} ${surname}`;
    this.activities = [];
}

// INSTANCES FOR TEST
var ibans = [10000000000,99999999999];
var customers = [];
var customer1 = new Customer("Azad","Yıldız",500,123456);
customer1.iban = "12345678901";
customers.push(customer1);
var customer2 = new Customer("Dr.","Watson",1000,123123);
customer2.iban = "10987654321";
customers.push(customer2);
var customer3 = new Customer("Sherlock","Holmes",1500,654321);
customer3.iban = "11223344556";
customers.push(customer3);
var customer4 = new Customer("Jim","Moriarty",2000,321321);
customer4.iban = "65544332211";
customers.push(customer4);

// LOGINED ACC
var loginedAcc = new Customer();

// CUSTOMER'S FUNCTION
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