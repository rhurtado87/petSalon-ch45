function displayPetNames(){
    document.getElementById('pets').innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
        document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
}
// display Footer ----------------------------------------------/// 
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.adderss.street}'
    ${salon.adderss.number} ${salon.adderss.zip}</p>`;
    
    }
    // display cards of pets items list
    function displayPetCards(){


    }