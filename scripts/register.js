let salon={
    name:"The fashion pet",
    phone:"999-999-9999",
    adderss:{
        street:"Plam",
        number:"234",
        zip:"23345"
    },
pets:[{
    name:"Scooby",
    age:"60"
},
{
    name:"Scrappy",
    age:"50"
},
{
    name:"Tweety Bird",
    age:"80"
}
] //pet arry
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets[3].name);


//use a for loop to travel the array

function displayFooterInfo(){

  document.getElementById("info").innerHTML=`
  <p>Welcome to the ${salon.name} the address is ${salon.adderss.street}
  ${salon.adderss.number} ${salon.adderss.zip}</p>
  `;

}
displayFooterInfo();