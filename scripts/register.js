let salon={
    name:"The fashion pet",
    phone:"999-999-9999",
    adderss:{
        street:"Plam",
        number:"234",
        zip:"23345"
    },
pets:[]
}

function Pet(n,a,g){
    this.name=n;
    this.age=a;
    this.gender=g;
}
 //pet arry ----------------------------///

function getE(id){
    return document.getElementById(id);
}
//get elements from HTML
let inputName=getE("txtName");
let inputAge=getE("txtAge");
let inputGender=getE("txtGender");

function register(){
    // getting value
    // create the newPet using the constructor
    let newPet = newPet
    
}
function init(){
    //creating predafiend obj
    let pet1=new Pet("Scooby",60,"Male");
    let pet2=new Pet("Tom",60,"Male");
    let pet3=new Pet("Jerry",60,"Male");
    salon.pets.push(pet1,pet2,pet3)
    //exacutiong fn
    displayPetNames();
    displayFooterInfo();
}
// display Footer ----------------------------------------------/// 
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.adderss.street}'
    ${salon.adderss.number} ${salon.adderss.zip}</p>`;
    
    }
window.onload=init;//wait to render the HTML