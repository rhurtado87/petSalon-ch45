//contructor
let petID=0;
function Pet(n,a,g,b,s,t,o){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.owner=o;
    this.id=petID++;
}
function isValid(){
    return document.getElementById(id);
    
}
//get elements from HTML
function getE(id){
    return document.getElementById(id);
}
//get elements from HTML
let inputName=getE("txtName");
let inputAge=getE("txtAge");
let inputGender=getE("txtGender");
let inputBreed=getE("txtBreed");
let inputService=getE("txtService");
let inputType=getE("txtType");
let inputOwner=getE("txtOwner");

function isValid(aPet){

    let validation=true;

//clear the txtName
getE("txtName").classList.remove("alert-error");
getE("txtService").classList.remove("alert-error");
        //the pet is not valid
    if(aPet.name==""){
        validation=false;
        getE("txtName").classList.add("alert-error");
}
    if(aPet.service==""){
        validation=false;    
        getE("txtService").classList.add("alert-error");
}
return validation;
}

// show the Notifications
function showNotifications(msg,type){

    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg}</p>`;

    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}

function register(){
// getting value
// create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    console.log(newPet);

    if(isValid(newPet)==true){
    // push the newPet using the constructior
    salon.pets.push(newPet);
    // call display function
    displayPetCards();
    
    // clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
    inputOwner.value="";

        showNotifications("Success Registed", "alert-pass");
    }else{
        showNotifications("Plase fill the Missing Infomation","alert-error");
    }
}
//deletePet(id)
function deletePet(petID){
    let deleteIndex;// to get the index of the arrray postion 
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        if(pet.id==petID){
            deleteIndex=i;
            break;
        }
    }
    getE(petID).remove(); //remove the pet from the array
    salon.pets.splice(deleteIndex,1);
}
function init(){
//creating predafiend obj
    let pet1=new Pet("Scooby",60,"Male","Toon","Grooming","Dog","warner bros");
    let pet2=new Pet("Tom",60,"Male","Toon","Grooming","Cat","warner bros");
    let pet3=new Pet("Jerry",60,"Male","Toon","Nails trimming","Mouse","warner bros");
    let pet4=new Pet("Bugs",70,"Male","Toon","Grooming","Bunny","warner bros");
    salon.pets.push(pet1,pet2,pet3,pet4)
//exacutiong fn -----------------------------------------------//
    displayPetCards();
}
window.onload=init;//wait to render the HTML