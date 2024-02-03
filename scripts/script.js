var globalVariable = "I'm in global scope";

function myFunction(){
    //This function can access globalVarible 
    console.log(globalVariable);
}

myFunction();

function myFunction2(){
    var localVariable = "I'm in local Scope";
    console.log(globalVariable);
}

myFunction2();

function planeTicket(destination){
    console.log("Traveling to ..." + destination);
    
    return price*1.11;
}

function calculateProfits(){
    var price1=(planeTicket("Italy",100));
    var price2=(planeTicket("Amsterdam",200));
    var price3=(planeTicket("Barcelona",150));

    console.log(price1+price2+price3);
}

calculateProfits();
