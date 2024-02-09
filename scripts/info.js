let salon={ //object
    name:"The fashion pet",
    phone:"999-999-9999",
    adderss:{
        street:"Plam",
        number:"234",
        zip:"23345"
    },
pets:[]
}
// display Footer ----------------------------------------------/// 
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.adderss.street}'
    ${salon.adderss.number} ${salon.adderss.zip}</p>
    `;
    
    }

displayFooterInfo();