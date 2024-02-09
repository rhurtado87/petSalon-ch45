//contructor
function Pet(n,a,g,b,s,t){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
}

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

function register(){
// getting value
// create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    console.log(newPet);
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

}
function init(){
//creating predafiend obj
    let pet1=new Pet("Scooby",60,"Male","GreatDam","Wash","Dog");
    let pet2=new Pet("Tom",60,"Male","Comedy","Wash","Cat");
    let pet3=new Pet("Jerry",60,"Male","Comedy","Nails","Mouse");
    let pet4=new Pet("Bugs",70,"Male","Rabit","Salon","Bunny");
    salon.pets.push(pet1,pet2,pet3,pet4)
//exacutiong fn -----------------------------------------------//
 displayPetCards();
}
window.onload=init;//wait to render the HTML